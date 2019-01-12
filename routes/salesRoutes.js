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
    app.put('/sales/:type-:fromdate-:todate', (req, res) => {
        let fromDate = moment(req.params.fromdate).format('YYYY-MM-DD')
        let toDate = moment(req.params.todate).format('YYYY-MM-DD')
        switch (req.params.type) {
            case 'move':
                // Move whole month
                const days = moment(req.params.todate).endOf('month').format('DD')
                res.sendStatus(200)
                for (let i = 1; i <= days; i++) {
                    fromDate = moment(fromDate).date(i).format('YYYY-MM-DD')
                    toDate = moment(toDate).date(i).format('YYYY-MM-DD')
                    db.Sales.update(
                        {
                            transaction_date: toDate
                        },
                        {
                            where: {
                                transaction_date: fromDate
                            },
                            fields: ['transaction_date']
                        })
                        .then(r => console.log(r)).catch(e => console.log(e))
                }
                break
            case 'copy':
                // Copy single day
                res.sendStatus(200) 
                db.Sales.findAll({
                    where: {
                        transaction_date: fromDate
                    }
                })
                    .then(transactions => {
                        let transArr = []
                        transactions.forEach(trans => {
                            transArr.push({
                                    employee_id: trans.dataValues.employee_id,
                                    transaction_date: toDate,
                                    transaction_time: trans.dataValues.transaction_time,
                                    beer_id: trans.dataValues.beer_id,
                                    product_type: trans.dataValues.product_type,
                                    total_oz: trans.dataValues.total_oz,
                                    cost: trans.dataValues.cost
                            })
                        })
                        db.Sales.bulkCreate(transArr)
                        .then(r => console.log(r))
                        .catch(e=> console.log(e))
                    })
                    .catch(e => console.log(e))

                break
            default:
                // do nothing
                break
        }
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