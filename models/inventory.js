module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventories', {
    date: DataTypes.DATEONLY,
    beer_name: DataTypes.STRING,
    inventory_oz: DataTypes.FLOAT,
    inventory_gallons: DataTypes.FLOAT,
    inventory_kegs: DataTypes.FLOAT,
    consumed_oz: DataTypes.FLOAT
  })

  Inventory.associate = models => {
    Inventory.belongsTo(models.Products, { foreignKey: { allowNull: false } })
  }

  return Inventory
}