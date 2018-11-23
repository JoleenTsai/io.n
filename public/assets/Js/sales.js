// Variables
let startDate = moment().format("YYYY-MM-DD")
let endDate = moment().format("YYYY-MM-DD")
let period = 'today'

document.getElementById("startDate").value = startDate
document.getElementById("endDate").value = endDate

// // Fetch all of the sales data
function breweryData() {
  fetch(`/sales/${startDate.split("-").join("")}-${endDate.split("-").join("")}`)
    .then(r => r.json())
    .then(r => {
      console.log(r)
      hourSalesGraph(r)
      topItemsGraph(r)
      employeeSalesGraph(r)
      salesGoalGraph(r)
    })
    .catch(e => console.log(e))
}

// Period Filter Function
function dateAutoFill() {
  event.preventDefault()

  period = document.querySelector('#period').value

  switch (period) {

    case "today":
      startDate = moment().format("YYYY-MM-DD")
      endDate = moment().format("YYYY-MM-DD")
      document.getElementById("startDate").value = startDate
      document.getElementById("endDate").value = endDate
      document.querySelector('#invalidDate').innerHTML = ``
      breweryData()
      break;

    case "yesterday":
      startDate = moment().subtract(1, 'day').format("YYYY-MM-DD")
      endDate = startDate
      document.getElementById("startDate").value = startDate
      document.getElementById("endDate").value = endDate
      document.querySelector('#invalidDate').innerHTML = ``
      breweryData()
      break;

    case "lastWeek":
      startDate = moment().day(-7).format("YYYY-MM-DD")
      endDate = moment().day(-1).format("YYYY-MM-DD")
      document.getElementById("startDate").value = startDate
      document.getElementById("endDate").value = endDate
      document.querySelector('#invalidDate').innerHTML = ``
      breweryData()
      break;

    case "lastMonth":
      startDate = moment().subtract(1, 'month').startOf('month').format("YYYY-MM-DD")
      endDate = moment().subtract(1, 'month').endOf('month').format("YYYY-MM-DD")
      document.getElementById("startDate").value = startDate
      document.getElementById("endDate").value = endDate
      document.querySelector('#invalidDate').innerHTML = ``
      breweryData()
      break;

    case "lastYear":
      startDate = moment().subtract(1, 'year').startOf('month').format("YYYY-MM-DD")
      endDate = moment().subtract(1, 'month').endOf('month').format("YYYY-MM-DD")
      document.getElementById("startDate").value = startDate
      document.getElementById("endDate").value = endDate
      document.querySelector('#invalidDate').innerHTML = ``
      breweryData()
      break;

    default:
  }
}

//Custom Date Filter Function
function customDate() {
  period = 'custom'
  document.querySelector('#period').value = ""
  startDate = document.getElementById("startDate").value
  endDate = document.getElementById("endDate").value

  if (startDate > endDate || startDate === "" || endDate === "") {
    document.querySelector('#invalidDate').innerHTML = `
          <p>Invalid Date!</p>
          `
  } else {
    document.querySelector('#invalidDate').innerHTML = ``
    console.log("Good")
    breweryData()
  }
}

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

  let salesToday = document.getElementById("hourSales");
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

//Top 5 Items Graph
function topItemsGraph(r) {

  let beerItemArray = []
  let beerItemSalesArray = []
  let beerItemSalesMaster = []

  // Creates the Beer Item Array for the Fetch Date Range
  r.forEach(item => {
    if (beerItemArray.includes(item.Product.name) === false) {
      beerItemArray.push(item.Product.name)
    }
  })

  // Based on the Beer Item Array Name it sums up total Sales
  for (let i = 0; i < beerItemArray.length; i++) {
    let x = 0
    r.forEach(item => {
      if (beerItemArray[i] === item.Product.name) {
        x += item.cost
      }
    })
    beerItemSalesArray.push(x)
  }

  // Puts both arrays into an Object
  for (let i = 0; i < beerItemArray.length; i++) {
    let x = {
      name: beerItemArray[i],
      sales: Math.round(beerItemSalesArray[i] * 100) / 100
    }
    beerItemSalesMaster.push(x)
  }

  // Sorts Array of objects to highest to lowest
  beerItemSalesMaster.sort((a, b) => a.sales < b.sales ? 1 : -1)

  // Pulls aprat the object into Arrays for Graph
  beerItemArray = []
  beerItemSalesArray = []
  beerItemSalesMaster.map(item => {
    beerItemArray.push(item.name)
    beerItemSalesArray.push(item.sales)
  })

  let topFive = document.getElementById("topFive");
  let topFiveItems = new Chart(topFive, {
    type: 'bar',
    data: {
      labels: beerItemArray.splice(0, 5),
      datasets: [{
        label: 'Top 5 Items Sold',
        data: beerItemSalesArray.splice(0, 5),
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

// Employee Sales Summary Graph
function employeeSalesGraph(r) {

  let employeeArray = []
  let employeeSalesArray = []
  let employeeSalesMaster = []

  // Creates the Beer Item Array for the Fetch Date Range
  r.forEach(item => {
    if (employeeArray.includes(item.Employee.full_name) === false) {
      employeeArray.push(item.Employee.full_name)
    }
  })

  // Based on the Beer Item Array Name it sums up total Sales
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
          'rgb(244, 231, 215)',
          'rgb(244, 231, 215)',
          'rgb(244, 231, 215)',
          'rgb(244, 231, 215)',
          'rgb(244, 231, 215)',
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

// Sales Goals Graph
function salesGoalGraph(r) {

  // Finding the Total Sales
  let totalSales = 0
  r.forEach(item => {
    totalSales += item.cost
  })

  fetch("/goals")
  .then(d => d.json())
  .then(d => {
    console.log(d)

    let totalGoalSales = 0
  
    // Start Date to Pull From
    let y = moment(startDate, "YYYY-MM-DD").startOf("month").format("YYYY-MM-DD")
    console.log(y)

    // How many days between the start Date and End Date
    let dayDiff = 1 + moment(endDate, "YYYY-MM-DD").diff(moment(startDate, "YYYY-MM-DD"), "days")
    console.log(dayDiff)
    
    d.forEach(goal => {
        if (y === goal.Date) {
          totalGoalSales = goal.day_average_sales_goal * dayDiff
          console.log(totalGoalSales)
          console.log(totalSales)

        let percentageGoal = Math.round(totalSales / totalGoalSales *100)/100
        console.log(percentageGoal)

        let diffpercentageGoal = 0

        if(percentageGoal<=1){
          diffpercentageGoal = Math.round((1- percentageGoal)*100)/100
        }

        console.log(diffpercentageGoal) 

          let sGoals = document.getElementById("salesGoals");
          let salesGoals = new Chart(sGoals, {
            type: 'doughnut',
            data: {
              labels: ["Goal Acheived", "Goal Left"],
              datasets: [{
                label: 'Sales by Employee',
                data: [percentageGoal, diffpercentageGoal],
                backgroundColor: [
                  'rgb(209, 168, 39)',
                  'rgb(161, 187, 208)'
                ]
              }]
            },
            options: {
              showAllTooltips: true
            }
          })




        }
      })
    })
    .catch(e => console.log(e))
    

  
}

breweryData()