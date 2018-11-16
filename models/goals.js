module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goals', {
    Date: DataTypes.DATEONLY,
    day_average_qty_goal: DataTypes.INTEGER,
    day_average_sales_goal: DataTypes.FLOAT
  })

  return Goal
}