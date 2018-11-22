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
      salesSumGraph()
      salesGoalGraph()
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

// Main's Sales Graph
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
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

// Top 5 Items Graph

function topItemsGraph(r) {

  let beerItemArray = []
  let beerItemSalesArray=[]

  r.forEach(item =>{ 
    if(beerItemArray.includes(item.Product.name)===false){
      beerItemArray.push(item.Product.name)
    }
  })

  console.log(beerItemArray)

  let topFive = document.getElementById("topFive");
  let topFiveItems = new Chart(topFive, {
    type: 'bar',
    data: {
      labels: ["Beer 1", "Beer 2", "Beer 3", "Beer 4", "Beer 5"],
      datasets: [{
        label: 'Top 5 Items Sold',
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
  })
}

// Sales Summary Graph

function salesSumGraph() {
  let salesSummary = document.getElementById("salesSumm");
  let salesSumm = new Chart(salesSummary, {
    type: 'bar',
    data: {
      labels: ["Summary 1", "Summary 2", "Summary 3", "Summary 4", "Summary 5"],
      datasets: [{
        label: 'Sales Summary',
        data: [985, 728, 507, 467, 456],
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
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}

// Sales Goals Graph

function salesGoalGraph() {
  let sGoals = document.getElementById("salesGoals");
  let salesGoals = new Chart(sGoals, {
    type: 'bar',
    data: {
      labels: ["Achievement 1", "Achievement 2", "Achievement 3", "Achievement 4", "Achievement 5"],
      datasets: [{
        label: 'Sales Goals',
        data: [985, 728, 507, 467, 456],
        backgroundColor: [
          'rgb(63, 66, 52)',
          'rgb(63, 66, 52)',
          'rgb(63, 66, 52)',
          'rgb(63, 66, 52)',
          'rgb(63, 66, 52)',
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
  })
}

breweryData()