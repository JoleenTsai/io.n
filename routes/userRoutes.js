const db = require('../models')

module.exports = app => {
    app.get('/login/:user-:password', (req, res) => {
        db.users.findOne({
            where: {
                user_name: req.params.user
            }
        })
            .then(user => {
                // >> TODO <<
                // if password password matches:
                //     send user info or confirmaton object/string to be stored in local-storage, enabling site access
                res.json(user)
                // else wrong password:
                //     send rejection object to be used for "incorrect password" error message on login page
            })
            .catch(e => {
                console.log(e)
                // >> TODO << send rejection string/object to be be used for "incorrect username" error message on login page
            })
    })
}