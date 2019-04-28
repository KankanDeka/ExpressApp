var User = require('./user')
function AddUser(user)  {
    var db = require('./database')

    console.log('Add: ', user)
    db.once('open', ()=> {
        User.create({ 
            username : user.name,
            password : user.password
        }, (err, res) =>    {
            db.close()
            if (err)    {
                console.log('Insert error', err.message)
                return err
            }
            else
                return res
        })
    })
}

module.exports = AddUser