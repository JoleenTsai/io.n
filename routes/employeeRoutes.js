const db = require('../models')

module.exports = app => {
    // All Employees
    app.get('/employees', (req, res) => {
        db.Employees.findAll({
        })
        .then(employees => res.json(employees))
        .catch(e => console.log(e))
    })

    // One employee
    app.get('/employees/:id', (req, res) => {
        db.Employees.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(employee => res.json(employee))
        .catch(e => console.log(e))
    })

    // Add new employee
    app.post('/employees', (req, res) => {
        db.Employees.create(req.body)
        .then(r => res.sendStatus(200))
        .catch(e => console.log(e))
    })

    // Update employee
    app.put('/employees/:id', (req, res) => {
        db.Employees.update(
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

    //Delete employee
    app.delete("/employees/:id", function (req, res) {
        db.Employees.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))

    })
}