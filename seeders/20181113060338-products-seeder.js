'use strict';

// To create the seed file run the code below
// node_modules/.bin/sequelize seed:generate --name demo-user

// To upload the seed file run the bottom code
// node_modules/.bin/sequelize db:seed:all

// To undo the seed files run the bottom code
// node_modules/.bin/sequelize db:seed:undo:all

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        "name": "Req.Body",
        "type": "IPA",
        "abv": 0.062,
        "status": "Brewed",
        "cpu_keg": 250,
        "cost_keg": 750,
        "cost_gallon": 48.3871,
        "cost_growler": 56.4516,
        "cost_pint": 6.0484,
        "cost_taster": 1.5121,
        "cost_oz": 0.378,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Lorem",
        "type": "IPA",
        "abv": 0.065,
        "status": "Brewed",
        "cpu_keg": 275,
        "cost_keg": 825,
        "cost_gallon": 53.2258,
        "cost_growler": 62.0968,
        "cost_pint": 6.6532,
        "cost_taster": 1.6633,
        "cost_oz": 0.4158,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Lorem Zombie Attack",
        "type": "DIPA",
        "abv": 0.08,
        "status": "Brewed",
        "cpu_keg": 350,
        "cost_keg": 1050,
        "cost_gallon": 67.7419,
        "cost_growler": 79.0323,
        "cost_pint": 8.4677,
        "cost_taster": 2.1169,
        "cost_oz": 0.5292,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "API IPA",
        "type": "DIPA",
        "abv": 0.0825,
        "status": "Brewed",
        "cpu_keg": 275,
        "cost_keg": 825,
        "cost_gallon": 53.2258,
        "cost_growler": 62.0968,
        "cost_pint": 6.6532,
        "cost_taster": 1.6633,
        "cost_oz": 0.4158,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Dev from Hell",
        "type": "TIPA",
        "abv": 0.11,
        "status": "Brewed",
        "cpu_keg": 400,
        "cost_keg": 1200,
        "cost_gallon": 77.4194,
        "cost_growler": 90.3226,
        "cost_pint": 9.6774,
        "cost_taster": 2.4194,
        "cost_oz": 0.6048,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Curly Braces",
        "type": "SOUR CIDER",
        "abv": 0.08,
        "status": "Brewed",
        "cpu_keg": 500,
        "cost_keg": 1500,
        "cost_gallon": 96.7742,
        "cost_growler": 48.3871,
        "cost_pint": 12.0968,
        "cost_taster": 3.0242,
        "cost_oz": 0.756,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Reactor Cider",
        "type": "SOUR CIDER",
        "abv": 0.08,
        "status": "Brewed",
        "cpu_keg": 500,
        "cost_keg": 1500,
        "cost_gallon": 96.7742,
        "cost_growler": 112.9032,
        "cost_pint": 12.0968,
        "cost_taster": 3.0242,
        "cost_oz": 0.756,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Java",
        "type": "STOUTS",
        "abv": 0.055,
        "status": "Brewed",
        "cpu_keg": 550,
        "cost_keg": 1650,
        "cost_gallon": 106.4516,
        "cost_growler": 124.1935,
        "cost_pint": 13.3065,
        "cost_taster": 3.3266,
        "cost_oz": 0.8317,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "BootStraping",
        "type": "PALE ALE",
        "abv": 0.05,
        "status": "Brewed",
        "cpu_keg": 250,
        "cost_keg": 750,
        "cost_gallon": 48.3871,
        "cost_growler": 56.4516,
        "cost_pint": 6.0484,
        "cost_taster": 1.5121,
        "cost_oz": 0.378,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Express",
        "type": "PALE ALE",
        "abv": 0.0575,
        "status": "Brewed",
        "cpu_keg": 250,
        "cost_keg": 750,
        "cost_gallon": 48.3871,
        "cost_growler": 56.4516,
        "cost_pint": 6.0484,
        "cost_taster": 1.5121,
        "cost_oz": 0.378,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Nodemon",
        "type": "BLONDE ALE",
        "abv": 0.0475,
        "status": "Brewed",
        "cpu_keg": 275,
        "cost_keg": 825,
        "cost_gallon": 53.2258,
        "cost_growler": 62.0968,
        "cost_pint": 6.6532,
        "cost_taster": 1.6633,
        "cost_oz": 0.4158,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "JSON's Amber",
        "type": "AMBER",
        "abv": 0.07,
        "status": "Brewed",
        "cpu_keg": 290,
        "cost_keg": 870,
        "cost_gallon": 56.129,
        "cost_growler": 65.4839,
        "cost_pint": 7.0161,
        "cost_taster": 1.754,
        "cost_oz": 0.4385,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "onClick",
        "type": "PILSNER",
        "abv": 0.063,
        "status": "Brewed",
        "cpu_keg": 320,
        "cost_keg": 960,
        "cost_gallon": 61.9355,
        "cost_growler": 72.2581,
        "cost_pint": 7.7419,
        "cost_taster": 1.9355,
        "cost_oz": 0.4839,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Git Lager",
        "type": "LAGER",
        "abv": 0.055,
        "status": "Brewed",
        "cpu_keg": 315,
        "cost_keg": 945,
        "cost_gallon": 60.9677,
        "cost_growler": 71.129,
        "cost_pint": 7.621,
        "cost_taster": 1.9052,
        "cost_oz": 0.4763,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "SAiSSon",
        "type": "SAISON",
        "abv": 0.092,
        "status": "Brewed",
        "cpu_keg": 450,
        "cost_keg": 1350,
        "cost_gallon": 87.0968,
        "cost_growler": 101.6129,
        "cost_pint": 10.8871,
        "cost_taster": 2.7218,
        "cost_oz": 0.6804,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "AJAX Hefe",
        "type": "HEFEWEIZEN",
        "abv": 0.074,
        "status": "Brewed",
        "cpu_keg": 300,
        "cost_keg": 900,
        "cost_gallon": 58.0645,
        "cost_growler": 67.7419,
        "cost_pint": 7.2581,
        "cost_taster": 1.8145,
        "cost_oz": 0.4536,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Fruit Loop",
        "type": "WHEAT",
        "abv": 0.065,
        "status": "Brewing",
        "cpu_keg": 300,
        "cost_keg": 900,
        "cost_gallon": 58.0645,
        "cost_growler": 67.7419,
        "cost_pint": 7.2581,
        "cost_taster": 1.8145,
        "cost_oz": 0.4536,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "innerHTML",
        "type": "BROWN",
        "abv": 0.08,
        "status": "Brewing",
        "cpu_keg": 450,
        "cost_keg": 1350,
        "cost_gallon": 87.0968,
        "cost_growler": 101.6129,
        "cost_pint": 10.8871,
        "cost_taster": 2.7218,
        "cost_oz": 0.6804,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Boolean",
        "type": "AMBER",
        "abv": 0.0725,
        "status": "Brewing",
        "cpu_keg": 275,
        "cost_keg": 825,
        "cost_gallon": 53.2258,
        "cost_growler": 62.0968,
        "cost_pint": 6.6532,
        "cost_taster": 1.6633,
        "cost_oz": 0.4158,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Array",
        "type": "LAGER",
        "abv": 0.068,
        "status": "Brewing",
        "cpu_keg": 250,
        "cost_keg": 750,
        "cost_gallon": 48.3871,
        "cost_growler": 56.4516,
        "cost_pint": 6.0484,
        "cost_taster": 1.5121,
        "cost_oz": 0.378,
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
