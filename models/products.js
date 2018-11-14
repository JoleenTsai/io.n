module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    abv: DataTypes.FLOAT,
    status: DataTypes.STRING,
    cpu_keg: DataTypes.FLOAT,
    cost_keg: DataTypes.FLOAT,
    cost_gallon: DataTypes.FLOAT,
    cost_growler: DataTypes.FLOAT,
    cost_pint: DataTypes.FLOAT,
    cost_taster: DataTypes.FLOAT,
    cost_oz: DataTypes.FLOAT
  })

  return Product
}