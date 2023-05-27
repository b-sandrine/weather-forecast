const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    names: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;