var mongoose = require('mongoose');
const process = require('process');

const config = require('./config.json')

mongoose.connect('mongodb://' + config.host, {
    useNewUrlParser : true,
    user            : config.user,
    pass            : config.pass,
    dbName          : config.db
});

module.exports = mongoose.connection