module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventories', {
    date: DataTypes.DATEONLY,
    beer_id: DataTypes.INTEGER,
    inventory_kegs: DataTypes.FLOAT,
    consumed_oz: DataTypes.FLOAT
  })

  Inventory.associate = models => {
    Inventory.belongsTo(models.Products, { foreignKey: "beer_id"})
  }

  return Inventory
}