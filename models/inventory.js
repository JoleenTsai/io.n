module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Inventory', {
    inventory_id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    beer_name: DataTypes.STRING,
    inventory_oz: DataTypes.FLOAT,
    inventory_gallons: DataTypes.FLOAT,
    inventory_kegs: DataTypes.FLOAT,
    consumed_oz: DataTypes.FLOAT
  })
}