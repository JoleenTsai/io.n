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
      quarterlyGoalsGraph(r)
      yearlyGoalsGraph(r)
      // employeeSalesYTDGraph(r)
      salesGoalGraph(r)
    })
    .catch(e => console.log(e))
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

    let totalGoalSales = 0
  
    // Start Date to Pull From
    let y = moment(startDate, "YYYY-MM-DD").startOf("month").format("YYYY-MM-DD")

    // How many days between the start Date and End Date
    let dayDiff = 1 + moment(endDate, "YYYY-MM-DD").diff(moment(startDate, "YYYY-MM-DD"), "days")
    
    d.forEach(goal => {
        if (y === goal.Date) {
          totalGoalSales = goal.day_average_sales_goal * dayDiff

        let percentageGoal = Math.round(totalSales / totalGoalSales *100)/100
        
        let diffpercentageGoal = 0

        if(percentageGoal<=1){
          diffpercentageGoal = Math.round((1- percentageGoal)*100)/100
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
// Quarterly Goals Graph
function quarterlyGoalsGraph(r) {

  // Find Quarterly Sales
  let quarterSales = 0
  r.forEach(item => {
    quarterSales += item.cost
  })

  fetch("/goals")
  .then(d => d.json())
  .then(d => {

    let quarterSalesGoals = 0
  
    // Start Date to Pull From
    let y = moment(startDate, "YYYY-MM-DD").startOf("quarter").format("YYYY-MM-DD")

    // How many days between the start Date and End Date
    let dayDiff = 1 + moment(endDate, "YYYY-MM-DD").diff(moment(startDate, "YYYY-MM-DD"), "months")
    
    d.forEach(goal => {
        if (y === goal.Date) {
          quarterSalesGoals = goal.day_average_sales_goal * dayDiff

        let percentageGoal = Math.round(quarterSales / quarterSalesGoals *100)/100
        
        let diffpercentageGoal = 0

        if(percentageGoal<=1){
          diffpercentageGoal = Math.round((1- percentageGoal)*100)/100
        }

          let qGoals = document.getElementById("quarterlyGoals");
          let quarterlyGoals = new Chart(qGoals, {
            type: 'doughnut',
            data: {
              labels: ["Goal Acheived", "Goal Left"],
              datasets: [{
                label: 'Quarterly Sales',
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

// Yearly Goals Graph
function yearlyGoalsGraph(r) {

  // Find Yearly Sales
  let yearSales = 0
  r.forEach(item => {
    yearSales += item.cost
  })

  fetch("/goals")
  .then(d => d.json())
  .then(d => {

    let yearSalesGoals = 0
  
    // Start Date to Pull From
    let y = moment(startDate, "YYYY-MM-DD").startOf("year").format("YYYY-MM-DD")

    // How many days between the start Date and End Date
    let dayDiff = 1 + moment(endDate, "YYYY-MM-DD").diff(moment(startDate, "YYYY-MM-DD"), "days")
    
    d.forEach(goal => {
        if (y === goal.Date) {
          yearSalesGoals = goal.day_average_sales_goal * dayDiff

        let percentageGoal = Math.round(yearSales / yearSalesGoals *100)/100
        
        let diffpercentageGoal = 0

        if(percentageGoal<=1){
          diffpercentageGoal = Math.round((1- percentageGoal)*100)/100
        }

          let yGoals = document.getElementById("yearlyGoals");
          let yearlyGoals = new Chart(yGoals, {
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