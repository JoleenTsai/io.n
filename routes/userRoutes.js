const db = require('../models')

module.exports = app => {
    app.get('/login/:user-:password', (req, res) => {
        db.Users.findOne({
            where: {
                user_name: req.params.user
            }
        })
            .then(user => {
                // if password matches send confirmation and username
                if (user.dataValues.password === req.params.password){
                    res.json ({
                        "verified": true,
                        "user_name" : user.dataValues.user_name,
                        "first_name": user.dataValues.first_name,
                        "last_name": user.dataValues.last_name
                    })
                } else {
                    // else wrong password, send rejection

                    res.json({
                        "verified": false
                    })
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}