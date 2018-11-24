const db = require('../models')
const Op = db.Sequelize.Op

module.exports = app => {
    // All Sales
    app.get('/sales', (req, res) => {
        db.Sales.findAll({
            include: [db.Products, db.Employees]
        })
            .then(sales => res.json(sales))
            .catch(e => console.log(e))
    })

    // sales by period
    app.get('/sales/:period-:custom1-:custom2', (req, res) => {
        // Determine period's start and end
        let startDate = require('../data/getPeriod')(req.params.period, req.params.custom1, req.params.custom2).start
        let endDate = require('../data/getPeriod')(req.params.period, req.params.custom1, req.params.custom2).end

        db.Sales.findAll({
            where: {
                transaction_date: {
                    [Op.gte]: startDate,
                    [Op.lte]: endDate
                }
            },
            include: [db.Products, db.Employees]
        })
            .then(sales => res.json(sales))
            .catch(e => console.log(e))
    })

    // Add new transaction retroactively
    app.post('/sales', (req, res) => {
        db.Sales.create(req.body)
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // Update sales transaction retroactively
    app.put('/sales/:id', (req, res) => {
        db.Sales.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    //Delete sale
    app.delete("/sales/:id", function (req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))

    })
}