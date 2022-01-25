const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 1024,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model('User', userSchema);