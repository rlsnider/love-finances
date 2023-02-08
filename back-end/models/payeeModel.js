const mongoose = require('mongoose')

const payeeSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('Payee', payeeSchema)