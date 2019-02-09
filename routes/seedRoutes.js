const db = require('../models')

module.exports = app => {

    // GOALS    /////////////////////

    // Move goals month
    app.put('seed/goals/move/:fromdate-:todate', (req, res) => {
        let fromDate = moment(req.params.fromdate).format('YYYY-MM-DD')
        let toDate = moment(req.params.todate).format('YYYY-MM-DD')
        const days = moment(req.params.todate).endOf('month').format('DD')
        res.sendStatus(200)
        for (let i = 1; i <= days; i++) {
            fromDate = moment(fromDate).date(i).format('YYYY-MM-DD')
            toDate = moment(toDate).date(i).format('YYYY-MM-DD')
            db.Goals.update(
                {
                    date: toDate
                },
                {
                    where: {
                        date: fromDate
                    },
                    fields: ['date']
                })
                .then(r => console.log(r)).catch(e => console.log(e))
        }
    })

    // INVENTORY	////////////////

    // Move inventory month
    app.put('seed/inventory/move/:fromdate-:todate', (req, res) => {
        let fromDate = moment(req.params.fromdate).format('YYYY-MM-DD')
        let toDate = moment(req.params.todate).format('YYYY-MM-DD')
        // Move whole month
        const days = moment(req.params.todate).endOf('month').format('DD')
        res.sendStatus(200)
        for (let i = 1; i <= days; i++) {
            fromDate = moment(fromDate).date(i).format('YYYY-MM-DD')
            toDate = moment(toDate).date(i).format('YYYY-MM-DD')
            db.Inventories.update(
                {
                    date: toDate
                },
                {
                    where: {
                        date: fromDate
                    },
                    fields: ['date']
                })
                .then(r => console.log(r)).catch(e => console.log(e))
        }
    })

    // Delete invenotory day
    app.delete("seed/inventory/delete/:date", function (req, res) {
        db.Sales.destroy({
            where: {
                date: req.params.date
            }
        })
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // SALES    ///////////////////


    // Copy sales day
    app.put('seed/sales/copy/:fromdate-:todate', (req, res) => {
        let fromDate = moment(req.params.fromdate).format('YYYY-MM-DD')
        let toDate = moment(req.params.todate).format('YYYY-MM-DD')
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
                            .catch(e => console.log(e))
                    })
                    .catch(e => console.log(e))

    })

    // Move Sales Month
    app.put('seed/sales/move/:fromdate-:todate', (req, res) => {
        let fromDate = moment(req.params.fromdate).format('YYYY-MM-DD')
        let toDate = moment(req.params.todate).format('YYYY-MM-DD')
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
    })

    // Delete Sales Day
    app.delete("seed/sales/delete/:date", function (req, res) {
        db.Sales.destroy({
            where: {
                transaction_date: req.params.date
            }
        })
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))

    })

}