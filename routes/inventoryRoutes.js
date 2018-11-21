const db = require('../models')
const Op = db.Sequelize.Op
const moment = require('moment')

module.exports = app => {
    module.exports = app => {
        // All Inventory 
        app.get('/inventory', (req, res) => {
            db.Inventory.findAll({
                include: [db.Products]
            })
                .then(inventory => res.json(inventory))
                .catch(e => console.log(e))
        })

        // inventory by period
        app.get('/inventory/:period-:custom1-:custom2', (req, res) => {
            db.Inventory.findAll({
                where: {
                    date: {
                        [Op.gte]: moment(req.params.custom1).format('YYYY-MM-DD'),
                        [Op.lte]: moment(req.params.custom2).format('YYYY-MM-DD')
                    }
                },
                include: [db.Products]
            })
                .then(inventory => res.json(inventory))
                .catch(e => console.log(e))
        })

        // Add new inventory count
        app.post('/inventory', (req, res) => {
            db.Inventory.create(req.body)
        })
        .then(r => res.sendStatus(200))
            .catch(e => console.log(e))

        // Update inventory count
        app.put('/inventory/:date-:beer', (req, res) => {
            db.Inventory.update(
                req.body,
                {
                    where: {
                        date: req.params.date,
                        beer_id: req.params.beer
                    }
                }
            )
        })
    .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    }
}