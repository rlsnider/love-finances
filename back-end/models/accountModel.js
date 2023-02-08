const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
}) 

module.exports = mongoose.model('Account', accountSchema)