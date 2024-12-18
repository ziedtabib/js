var mongoose = require('mongoose')
var schema = mongoose.Schema
var Hotels = new schema({
    name: String,
    fabricationDate: Date,
    nbrRoom: {
        type: Number,
        default: 10
    }

})
module.exports = mongoose.model('hotels', Hotels)