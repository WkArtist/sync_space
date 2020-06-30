const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    province: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = userSchema