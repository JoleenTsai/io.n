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
    app.get('/sales/:period', (req, res) => {
        let startDate
        let endDate
        // Determine period's start and end
        switch (req.params.period) {
            // >> TODO <<  CALCULATE EACH START AND END DATE
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

        db.Sales.findAll({
            where: {
                [Op.gte]: startDate,
                [Op.lte]: endDate
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