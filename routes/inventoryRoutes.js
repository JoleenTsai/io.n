const db = require('../models')
const Op = db.Sequelize.Op

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
        app.get('/inventory/:period', (req, res) => {
            let now = new Date
            let startDate
            let endDate
            // >>TODO CALCULATE EACH PERIOD'S START AND END
            switch (req.params.period) {
                case 'month':
                    startDate = '2017-10-01'
                    endDate = '2017-10-31'
                    break
                case 'week':
                    startDate = '2017-11-04'
                    endDate = '2017-11-10'
                    break
                case 'yesterday':
                    startDate = '2017-11-12'
                    endDate = '2017-11-12'
                    break
                case 'today':
                    startDate = '2017-11-13'
                    endDate = '2017-11-13'
                    break
            }

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