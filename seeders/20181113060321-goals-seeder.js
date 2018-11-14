'use strict';

// To create the seed file run the code below
// node_modules/.bin/sequelize seed:generate --name demo-user

// To upload the seed file run the bottom code
// node_modules/.bin/sequelize db:seed:all

// To undo the seed files run the bottom code
// node_modules/.bin/sequelize db:seed:undo:all

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Goals', [
      {
        "Date": "2017-01-01",
        "day_average_qty_goal": 49,
        "day_average_sales_goal": 600.5941,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-02-01",
        "day_average_qty_goal": 44,
        "day_average_sales_goal": 596.4026,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-03-01",
        "day_average_qty_goal": 79,
        "day_average_sales_goal": 1042.7957,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-04-01",
        "day_average_qty_goal": 48,
        "day_average_sales_goal": 609.415,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-05-01",
        "day_average_qty_goal": 50,
        "day_average_sales_goal": 635.0276,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-06-01",
        "day_average_qty_goal": 47,
        "day_average_sales_goal": 648.256,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-07-01",
        "day_average_qty_goal": 98,
        "day_average_sales_goal": 1278.131,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-08-01",
        "day_average_qty_goal": 99,
        "day_average_sales_goal": 1259.5907,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-09-01",
        "day_average_qty_goal": 48,
        "day_average_sales_goal": 611.8918,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-10-01",
        "day_average_qty_goal": 98,
        "day_average_sales_goal": 1268.8454,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-11-01",
        "day_average_qty_goal": 92,
        "day_average_sales_goal": 1129.3192,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2017-12-01",
        "day_average_qty_goal": 98,
        "day_average_sales_goal": 1346.1815,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-01-01",
        "day_average_qty_goal": 50,
        "day_average_sales_goal": 613.5756,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-02-01",
        "day_average_qty_goal": 44,
        "day_average_sales_goal": 546.9634,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-03-01",
        "day_average_qty_goal": 93,
        "day_average_sales_goal": 1230.8024,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-04-01",
        "day_average_qty_goal": 47,
        "day_average_sales_goal": 615.3374,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-05-01",
        "day_average_qty_goal": 49,
        "day_average_sales_goal": 649.631,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-06-01",
        "day_average_qty_goal": 97,
        "day_average_sales_goal": 1243.9523,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-07-01",
        "day_average_qty_goal": 98,
        "day_average_sales_goal": 1216.6613,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-08-01",
        "day_average_qty_goal": 99,
        "day_average_sales_goal": 1288.381,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-09-01",
        "day_average_qty_goal": 47,
        "day_average_sales_goal": 595.6623,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-10-01",
        "day_average_qty_goal": 114,
        "day_average_sales_goal": 1591.276,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "Date": "2018-11-01",
        "day_average_qty_goal": 53,
        "day_average_sales_goal": 631.0504,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]);
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
