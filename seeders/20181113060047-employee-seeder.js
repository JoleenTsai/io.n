'use strict';

// To create the seed file run the code below
// node_modules/.bin/sequelize seed:generate --name demo-user

// To upload the seed file run the bottom code
// node_modules/.bin/sequelize db:seed:all

// To undo the seed files run the bottom code
// node_modules/.bin/sequelize db:seed:undo:all


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [
      {
        "first_name": "Alessandro",
        "last_name": "Maclaine",
        "full_name": "Alessandro Maclaine",
        "title": "Bartender",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Quinton",
        "last_name": "Fults",
        "full_name": "Quinton Fults",
        "title": "Manager",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Mark",
        "last_name": "Arranz",
        "full_name": "Mark Arranz",
        "title": "Supervisor",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Laura",
        "last_name": "Salcido",
        "full_name": "Laura Salcido",
        "title": "Bartender",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Andy",
        "last_name": "Roush",
        "full_name": "Andy Roush",
        "title": "Bartender",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ] )
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
