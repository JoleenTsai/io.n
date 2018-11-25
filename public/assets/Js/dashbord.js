let startDate = moment().format("YYYY-MM-DD")
let endDate = moment().format("YYYY-MM-DD")
let period = 'today'
let timeTotalArray = []

document.querySelector('#todayDate').innerHTML=`Based on ${startDate}`

// Fetch all of the sales data
function breweryData() {
  fetch(`/sales/${startDate.split("-").join("")}-${endDate.split("-").join("")}`)
    .then(r => r.json())
    .then(r => {
      console.log(r)
      hourSalesGraph(r)
      employeeSalesGraph(r)
      
    })
    .catch(e => console.log(e))
}

breweryData()

// doughnut tooltip plugin
Chart.pluginService.register({
  beforeRender: function (chart) {
    if (chart.config.options.showAllTooltips) {
      // create an array of tooltips
      // we can't use the chart tooltip because there is only one tooltip per chart
      chart.pluginTooltips = [];
      chart.config.data.datasets.forEach(function (dataset, i) {
        chart.getDatasetMeta(i).data.forEach(function (sector, j) {
          chart.pluginTooltips.push(new Chart.Tooltip({
            _chart: chart.chart,
            _chartInstance: chart,
            _data: chart.data,
            _options: chart.options.tooltips,
            _active: [sector]
          }, chart));
        });
      });

      // turn off normal tooltips
      chart.options.tooltips.enabled = false;
    }
  },
  afterDraw: function (chart, easing) {
    if (chart.config.options.showAllTooltips) {
      // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
      if (!chart.allTooltipsOnce) {
        if (easing !== 1)
          return;
        chart.allTooltipsOnce = true;
      }

      // turn on tooltips
      chart.options.tooltips.enabled = true;
      Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
        tooltip.initialize();
        tooltip.update();
        // we don't actually need this since we are not animating tooltips
        tooltip.pivot();
        tooltip.transition(easing).draw();
      });
      chart.options.tooltips.enabled = false;
    }
  }
});

//Hours Sales Graph
function hourSalesGraph(r) {

  let timeTotalArray = []

  // time Intveral Looper
  let time12Total = 0
  let time13Total = 0
  let time14Total = 0
  let time15Total = 0
  let time16Total = 0
  let time17Total = 0
  let time18Total = 0
  let time19Total = 0
  let time20Total = 0
  let time21Total = 0
  let time22Total = 0
  let time23Total = 0
  let time24Total = 0

  r.forEach(sale => {
    switch (moment(sale.transaction_time, "HH:mm:ss").format("HH")) {
      case "12":
        time12Total += sale.cost
        break;
      case "13":
        time13Total += sale.cost
        break;
      case "14":
        time14Total += sale.cost
        break;
      case "15":
        time15Total += sale.cost
        break;
      case "16":
        time16Total += sale.cost
        break;
      case "17":
        time17Total += sale.cost
        break;
      case "18":
        time18Total += sale.cost
        break;
      case "19":
        time19Total += sale.cost
        break;
      case "20":
        time20Total += sale.cost
        break;
      case "21":
        time21Total += sale.cost
        break;
      case "22":
        time22Total += sale.cost
        break;
      case "23":
        time23Total += sale.cost
        break;
      case "24":
        time24Total += sale.cost
        break;
    }
  })

  timeTotalArray = [Math.round(time12Total * 100) / 100,
  Math.round(time13Total * 100) / 100,
  Math.round(time14Total * 100) / 100,
  Math.round(time15Total * 100) / 100,
  Math.round(time16Total * 100) / 100,
  Math.round(time17Total * 100) / 100,
  Math.round(time18Total * 100) / 100,
  Math.round(time19Total * 100) / 100,
  Math.round(time20Total * 100) / 100,
  Math.round(time21Total * 100) / 100,
  Math.round(time22Total * 100) / 100,
  Math.round(time23Total * 100) / 100,
  Math.round(time24Total * 100) / 100
  ]

  let salesToday = document.getElementById("todaySales");
  let todaySales = new Chart(salesToday, {
    type: 'line',
    data: {
      labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"],
      datasets: [{
        label: 'Sales by hour',
        data: timeTotalArray,
        fill: false,
        borderColor: 'rgb(161, 187, 208)',
        lineTension: 0.1
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            autoSkip: false,
            beginAtZero: true,
            callback: function (value, index, values) {
              return '$' + value;
            }
          }
        }]
      }
    }
  })
}


// Employee Sales Summary Graph
function employeeSalesGraph(r) {

  let employeeArray = []
  let employeeSalesArray = []
  let employeeSalesMaster = []

  // Creates the Measurement Array for the Fetch Date Range
  r.forEach(item => {
    if (employeeArray.includes(item.Employee.full_name) === false) {
      employeeArray.push(item.Employee.full_name)
    }
  })

  // Based on the Measurement Array Name it sums up total Sales
  for (let i = 0; i < employeeArray.length; i++) {
    let x = 0
    r.forEach(item => {
      if (employeeArray[i] === item.Employee.full_name) {
        x += item.cost
      }
    })
    employeeSalesArray.push(x)
  }

  // Puts both arrays into an Object
  for (let i = 0; i < employeeArray.length; i++) {
    let x = {
      name: employeeArray[i],
      sales: Math.round(employeeSalesArray[i] * 100) / 100
    }
    employeeSalesMaster.push(x)
  }

  // Sorts Array of objects to highest to lowest
  employeeSalesMaster.sort((a, b) => a.sales < b.sales ? 1 : -1)

  // Pulls aprat the object into Arrays for Graph
  employeeArray = []
  employeeSalesArray = []
  employeeSalesMaster.map(item => {
    employeeArray.push(item.name)
    employeeSalesArray.push(item.sales)
  })

  let salesSummary = document.getElementById("employeeSales");
  let salesSumm = new Chart(salesSummary, {
    type: 'bar',
    data: {
      labels: employeeArray,
      datasets: [{
        label: 'Sales Summary',
        data: employeeSalesArray,
        backgroundColor: [
          'rgb(209, 168, 39)',
           'rgb(209, 168, 39)',
           'rgb(209, 168, 39)',
           'rgb(209, 168, 39)',
           'rgb(209, 168, 39)',
        ]
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            autoSkip: false,
            beginAtZero: true,
            callback: function (value, index, values) {
              return '$' + value;
            }
          }
        }]
      }
    }
  })
}

// Sales Goals
let targetSales = document.getElementById("salesGoals");
let salesGoals = new Chart(targetSales, {
  type: 'doughnut',
  data: {
    labels: ["Current Sales", "Monthly Goal"],
    datasets: [{
      label: 'Sales by Employee',
      data: [15000, 40000],
      backgroundColor: [
        'rgb(209, 168, 39)',
        'rgb(161, 187, 208)'
      ]
    }]
  },
  options: {
    showAllTooltips: true
  }
});