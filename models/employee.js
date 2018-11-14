module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employees', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    title: DataTypes.STRING
  })
  return Employee
}