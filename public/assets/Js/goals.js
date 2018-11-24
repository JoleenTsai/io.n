// // Fetch all of the sales data
function breweryData() {
  fetch(`/sales/${startDate.split("-").join("")}-${endDate.split("-").join("")}`)
    .then(r => r.json())
    .then(r => {
      hourSalesGraph(r)
      topItemsGraph(r)
      employeeSalesGraph(r)
      salesGoalGraph(r)
    })
    .catch(e => console.log(e))
}
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