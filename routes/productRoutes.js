const db = require('../models')

module.exports = app => {
    // All Products
    app.get('/products', (req, res) => {
        db.Products.findAll({})
            .then(products => res.json(products))
                .catch(e => console.log(e))
    })

    // One products
    app.get('/products/:id', (req, res) => {
        db.Products.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(product => res.json(product))
            .catch(e => console.log(e))
    })

    // Add new product
    app.post('/products', (req, res) => {
        db.Products.create(req.body)
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // Update product
    app.put('/products/:id', (req, res) => {
        db.Products.update(
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

    //Delete product
    app.delete("/products/:id", function (req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(r => res.sendStatus(200))
            .catch(e => console.log(e))

    })
}