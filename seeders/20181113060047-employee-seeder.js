'use strict';

// To create the seed file run the code below
// node_modules/.bin/sequelize seed:generate --name demo-user

// To upload the seed file run the bottom code
// node_modules/.bin/sequelize db:seed:all

// To undo the seed files run the bottom code
// node_modules/.bin/sequelize db:seed:undo:all


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [{
      employee_id: 1,
      first_name: "Garrett",
      last_name: "Fermo",
      full_name: "Garrett Fermo",
      title: "Bartender",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_id: 2,
      first_name: "Adam",
      last_name: "Openbrier",
      full_name: "Adam Openbrier",
      title: "Manager",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_id: 3,
      first_name: "Jean",
      last_name: "Chung",
      full_name: "Jean Chung",
      title: "Supervisor",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_id: 4,
      first_name: "Joleen",
      last_name: "Tsai",
      full_name: "Joleen Tsai",
      title: "Bartender",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_id: 5,
      first_name: "Radley",
      last_name: "Eakle",
      full_name: "Radley Eakle",
      title: "Bartender",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
