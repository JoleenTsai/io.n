let startDate = moment().format("YYYY-MM-DD")
let endDate = moment().format("YYYY-MM-DD")
let period = 'today'
let timeTotalArray = []

// Puts the Date on the Page below Navbar
document.querySelector('#todayDate').innerHTML = `Based on ${startDate}`

// Fetch all of the sales data
function breweryData() {
  fetch(`/sales/${startDate.split("-").join("")}-${endDate.split("-").join("")}`)
    .then(r => r.json())
    .then(r => {
      hourSalesGraph(r)
      employeeSalesGraph(r)
      topTenList(r)
      salesGoalGraph(r)

    })
    .catch(e => console.log(e))
}

breweryData()

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

  // Creates the Employee Array for the Fetch Date Range
  r.forEach(item => {
    if (employeeArray.includes(item.Employee.full_name) === false) {
      employeeArray.push(item.Employee.full_name)
    }
  })

  // Based on the Employee Array Name it sums up total Sales
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

// Top Ten Items Sold List
function topTenList(r) {

  let beerItemArray = []
  let beerItemSalesArray = []
  let beerItemMeasurementArray = []
  let beerItemCostOzArray = []
  let beerItemMaster = []

  // Creates the Beer Array 
  r.forEach(item => {
    if (beerItemArray.includes(item.Product.name) === false) {
      beerItemArray.push(item.Product.name)
      beerItemCostOzArray.push(item.Product.cpu_keg / 124)
    }
  })

  // Based on the Beer Array Name it sums up total Sales
  for (let i = 0; i < beerItemArray.length; i++) {
    let x = 0
    r.forEach(item => {
      if (beerItemArray[i] === item.Product.name) {
        x += item.cost
      }
    })
    beerItemSalesArray.push(Math.round((x * 100)) / 100)
  }

  // Based on the Beer Array Name it sums up total Oz
  for (let i = 0; i < beerItemArray.length; i++) {
    let x = 0
    r.forEach(item => {
      if (beerItemArray[i] === item.Product.name) {
        x += item.total_oz
      }
    })
    beerItemMeasurementArray.push(Math.round(x / 16))
  }

  // Puts both arrays into an Object
  for (let i = 0; i < beerItemArray.length; i++) {
    let x = {
      name: beerItemArray[i],
      sales: beerItemSalesArray[i],
      cpu_pint: beerItemCostOzArray[i],
      total_qty: beerItemMeasurementArray[i]
    }
    beerItemMaster.push(x)
  }

  // Sorts Array of objects to highest to lowest
  beerItemMaster.sort((a, b) => a.sales < b.sales ? 1 : -1)


  // Creates the HTML List off the Master Beer Item List Top 10
  for (let i = 0; i <= 9; i++) {
    let tableItem = document.createElement('tr')
    tableItem.innerHTML = `
    <td>${beerItemMaster[i].name}</td>
    <td>${beerItemMaster[i].total_qty}</td>
    <td>$${beerItemMaster[i].sales}</td>
    <td>$${Math.round((beerItemMaster[i].cpu_pint * beerItemMaster[i].total_qty) * 100) / 100}</td>`

    document.querySelector('#tableItems').appendChild(tableItem)
  }
}

// Sales Goal Graph
function salesGoalGraph(r) {

  // Finding the Total Sales
  let totalSales = 0
  r.forEach(item => {
    totalSales += item.cost
  })

  fetch("/goals")
    .then(d => d.json())
    .then(d => {

      let totalGoalSales = 0

      // Start Date to Pull From
      let y = moment(startDate, "YYYY-MM-DD").startOf("month").format("YYYY-MM-DD")

      // How many days between the start Date and End Date
      let dayDiff = 1 + moment(endDate, "YYYY-MM-DD").diff(moment(startDate, "YYYY-MM-DD"), "days")

      d.forEach(goal => {
        if (y === goal.Date) {
          totalGoalSales = goal.day_average_sales_goal * dayDiff

          let percentageGoal = Math.round(totalSales / totalGoalSales * 100) / 100

          let diffpercentageGoal = 0

          if (percentageGoal <= 1) {
            diffpercentageGoal = Math.round((1 - percentageGoal) * 100) / 100
          }

          let targetSales = document.getElementById("salesGoals");
          let salesGoals = new Chart(targetSales, {
            type: 'horizontalBar',
            data: {
              datasets: [
                {
                  label: 'Goal Acheived',
                  data: [percentageGoal],
                  backgroundColor: 'rgb(209, 168, 39)' // green
                },
                {
                  label: 'Goal Left',
                  data: [diffpercentageGoal],
                  backgroundColor: 'rgb(161, 187, 208)' // yellow
                }
              ]
            },
            options: {
              scales: {
                xAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true,
                    steps: .10,
                    stepValue: .5,
                    max: 1,
                  }
                }],
                yAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true,
                    steps: 10,
                    stepValue: 5,
                    max: 100
                  }
                }]
              }
            }
          })
        }
      })
    })
    .catch(e => console.log(e))
}


