module.exports = (app) => {
    require('./employeeRoutes')(app)
    require('./goalRoutes')(app)
    require('./inventoryRoutes')(app)
    require('./productRoutes')(app)
    require('./salesRoutes')(app)
    require('./userRoutes')(app)
}