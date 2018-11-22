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
let employeesArray = []
let employeeSalesArray = []

// Sales by Employee
r.forEach(item => {
  if (employeesArray.includes(item.Employee.full_name) === false) {
    employeesArray.push(item.Employee.full_name)
  }
})

console.log(employeesArray)

  let empSales = document.getElementById("employeeSales");
  let employeeSales = new Chart(empSales, {
    type: 'bar',
    data: {
      labels: ["AMaclaine", "QFults", "MArranz", "LSalcido", "ARoush"],
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
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}