module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sales', {
    employee_id: DataTypes.INTEGER,
    transaction_date: DataTypes.DATEONLY,
    transaction_time: DataTypes.TIME,
    beer_id: DataTypes.INTEGER,
    product_type: DataTypes.STRING,
    total_oz: DataTypes.FLOAT,
    cost: DataTypes.FLOAT
  })

  Sale.associate = models => {
    Sale.belongsTo(models.Employees, { foreignKey: 'employee_id' })
    Sale.belongsTo(models.Products, { foreignKey: 'beer_id' })
  }

  return Sale
}