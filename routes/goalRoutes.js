const db = require('../models')
const Op = db.Sequelize.Op

module.exports = app => {
    // All Goals
    app.get('goals', (req, res) => {
        db.Goals.findAll({
            include: [db.Sales]
        })
        .then(goals => res.json(goals))
        .catch(e => console.log(e))
    })

    // One goal
    app.get('goals/:YYYY-:MM-:DD', (req, res) => {
        db.Goals.findOne({
            where: {
                date: `${req.params.YYYY}-${req.params.MM}-01` 
            },
            include: [db.Sales]
        })
            .then(goal => res.json(goal))
            .catch(e => console.log(e))
    })

    // Add new goal
    app.post('goals', (req, res) => {
        db.Goals.create(req.body)
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // Update goal
    app.put('goals/:YYYY-:MM-:DD', (req, res) => {
        db.Goals.update(
            req.body,
            {
                where: {
                    date: `${req.params.YYYY}-${req.params.MM}-01`
                }
            }
        )
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    })

}