var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    username    : {
        type        : String,
        required    : [true, 'Username can\'t be empty'],
    },
    password    : {
        type        : String,
        required    : [true, 'Password can\'t be empty'],
    }
})

module.exports = mongoose.model('User',userSchema)