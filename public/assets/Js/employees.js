// app.get(`sales/${moment().startOf('year').format('YYYYMMDD')}-${moment().format('YYYYMMDD')}`)

// Fetch all of the sales data
function breweryData() {
  fetch(`sales/${moment().startOf('year').format('YYYYMMDD')}-${moment().format('YYYYMMDD')}`)
    .then(r => r.json())
    .then(r => {
      console.log(r)
      employeeSalesGraph(r)
    })
    .catch(e => console.log(e))
  }

function employeeSalesGraph(r) {
// Variables
let employeeArray = []
let employeeSalesArray = []
let employeeSalesMaster = []

// Sales by Employee
r.forEach(item => {
  if (employeeArray.includes(item.Employee.full_name) === false) {
    employeeArray.push(item.Employee.full_name)
  }
})

  for (let i = 0; i < employeeArray.length; i++) {
    let x = 0
    r.forEach(item => {
      if (employeeArray[i] === item.Employee.full_name) {
        x += item.cost
      }
    })
    employeeSalesArray.push(x)
  }

  for (let i = 0; i < employeeArray.length; i++) {
    let x = {
      name: employeeArray[i],
      sales: Math.round(employeeSalesArray[i] * 100) / 100
    }
    employeeSalesMaster.push(x)
  }

  employeeSalesMaster.sort((a, b) => a.sales < b.sales ? 1 : -1)

  // Pulls aprat the object into Arrays for Graph
  employeeArray = []
  employeeSalesArray = []
  employeeSalesMaster.map(item => {
    employeeArray.push(item.name)
    employeeSalesArray.push(item.sales)
  })

  let employeeSales = document.getElementById("employeeSales");
  let empSales = new Chart(employeeSales, {
    type: 'bar',
    data: {
      labels: employeeArray,
      datasets: [{
        label: 'Sales by Employee',
        data: employeeSalesArray,
        backgroundColor: [
          '#d1a827',
          '#d1a827',
          '#d1a827',
          '#d1a827',
          '#d1a827',
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

breweryData()