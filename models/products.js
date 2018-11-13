module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    abv: DataTypes.FLOAT,
    status: DataTypes.STRING,
    cpu_keg: DataTypes.FLOAT,
    cpu_gallon: DataTypes.FLOAT,
    cpu_growler: DataTypes.FLOAT,
    cpu_pint: DataTypes.FLOAT,
    cpu_taster: DataTypes.FLOAT,
    cpu_oz: DataTypes.FLOAT,
    profit_keg: DataTypes.FLOAT,
    profit_gallon: DataTypes.FLOAT,
    profit_growler: DataTypes.FLOAT,
    profit_pint: DataTypes.FLOAT,
    profit_taster: DataTypes.FLOAT,
    profit_oz: DataTypes.FLOAT,
    cost_keg: DataTypes.FLOAT,
    cost_gallon: DataTypes.FLOAT,
    cost_growler: DataTypes.FLOAT,
    cost_pint: DataTypes.FLOAT,
    cost_taster: DataTypes.FLOAT,
    cost_oz: DataTypes.FLOAT
  })
}