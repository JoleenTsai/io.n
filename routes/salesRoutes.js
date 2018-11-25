const db = require('../models')
const Op = db.Sequelize.Op
const moment = require('moment')

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
    app.get('/sales/:custom1-:custom2', (req, res) => {
        db.Sales.findAll({
            where: {
                transaction_date: {
                    [Op.gte]: moment(req.params.custom1).format('YYYY-MM-DD'),
                    [Op.lte]: moment(req.params.custom2).format('YYYY-MM-DD')
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