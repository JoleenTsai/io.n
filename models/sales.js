module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Sales', {
    employee_name: DataTypes.STRING,
    employee_title: DataTypes.STRING,
    employee_id: DataTypes.INTEGER,
    transaction_date: DataTypes.DATEONLY,
    transaction_time: DataTypes.TIME,
    transaction_month: DataTypes.DATEONLY,
    beer_name: DataTypes.STRING,
    beer_id: DataTypes.INTEGER,
    beer_type: DataTypes.STRING,
    abv: DataTypes.FLOAT,
    product_type: DataTypes.STRING,
    total_oz: DataTypes.FLOAT,
    cpu: DataTypes.FLOAT,
    profit: DataTypes.FLOAT,
    cost: DataTypes.FLOAT
  })
}