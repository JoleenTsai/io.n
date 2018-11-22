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

// Today's Sales
let salesToday = document.getElementById("todaySales");
let todaySales = new Chart(salesToday, {
  type: 'line',
  data: {
    labels: ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"],
    datasets: [{
      label: 'Sales by hour',
      data: [200, 100, 50, 25, 35, 48, 60, 80, 400, 500, 550, 545, 550],
      fill: false,
      borderColor: 'rgb(161, 187, 208)',
      lineTension: 0.1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
// Sales by Employee
let empSales = document.getElementById("employeeSales");
let employeeSales = new Chart(empSales, {
  type: 'bar',
  data: {
    labels: ["Garrett Fermo", "Radley Eakle", "Adam Openbrier", "Joleen Tsai", "Jean Chung"],
    datasets: [{
      label: 'Sales by Employee',
      data: [985, 728, 507, 467, 456],
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
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

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