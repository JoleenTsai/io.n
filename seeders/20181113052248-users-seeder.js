'use strict';

// To create the seed file run the code below
// node_modules/.bin/sequelize seed:generate --name demo-user

// To upload the seed file run the bottom code
// node_modules/.bin/sequelize db:seed:all

// To undo the seed files run the bottom code
// node_modules/.bin/sequelize db:seed:undo:all


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        "first_name": "Garrett",
        "last_name": "Fermo",
        "user_name": "GFermo",
        "password": "Fermo123",
        "email": "Garrett.Fermo@lot17Abrewing.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Adam",
        "last_name": "Openbrier",
        "user_name": "AOpenbrier",
        "password": "Openbrier123",
        "email": "Adam.Openbrier@lot17Abrewing.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Jean",
        "last_name": "Chung",
        "user_name": "JChung",
        "password": "Chung123",
        "email": "Jean.Chung@lot17Abrewing.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Joleen",
        "last_name": "Tsai",
        "user_name": "JTsai",
        "password": "Tsai123",
        "email": "Joleen.Tsai@lot17Abrewing.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "first_name": "Radley",
        "last_name": "Eakle",
        "user_name": "REakle",
        "password": "Eakle123",
        "email": "Radley.Eakle@lot17Abrewing.com",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ] );
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
