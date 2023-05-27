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
        type: Integer,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})