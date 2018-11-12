module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Goals', {
    id: DataTypes.INTEGER,
    Date: DataTypes.DATEONLY ,
    day_average_qty_goal: DataTypes.INTEGER,
    day_average_sales_goal: DataTypes.FLOAT
  })
}