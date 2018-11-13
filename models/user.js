module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  })
}