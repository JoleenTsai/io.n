const db = require('../models')
const Op = db.Sequelize.Op
const moment = require('moment')

module.exports = app => {
    // All Goals
    app.get('/goals', (req, res) => {
        db.Goals.findAll({
        })
        .then(goals => res.json(goals))
        .catch(e => console.log(e))
    })

    // One goal
    app.get('/goals/:date', (req, res) => {
        db.Goals.findOne({
            where: {
                Date: moment(req.params.date).format('YYYY-MM-DD')
            },
        })
            .then(goal => res.json(goal))
            .catch(e => console.log(e))
    })

    // Add new goal
    app.post('/goals', (req, res) => {
        db.Goals.create(req.body)
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // Update goal
    app.put('/goals/:date', (req, res) => {
        db.Goals.update(
            req.body,
            {
                where: {
                    date: moment(req.params.date).format('YYYY-MM-DD')
                }
            }
        )
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    })

}