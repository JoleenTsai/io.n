'use strict';

// To create the seed file run the code below
// node_modules/.bin/sequelize seed:generate --name demo-user

// To upload the seed file run the bottom code
// node_modules/.bin/sequelize db:seed:all

// To undo the seed files run the bottom code
// node_modules/.bin/sequelize db:seed:undo:all

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
