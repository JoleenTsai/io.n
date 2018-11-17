const db = require('../models')
const Op = db.Sequelize.Op
const moment = require()

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
            let startDate = require('../data/getPeriod')(req.params.period, req.params.custom1, req.params.custom2).start
            let endDate = require('../data/getPeriod')(req.params.period, req.params.custom1, req.params.custom2).end

            db.Inventory.findAll({
                where: {
                    date: {
                        [Op.gte]: startDate,
                        [Op.lte]: endDate
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
                        beer_id: req.params.product
                    }
                }
            )
        })
    .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    }
}