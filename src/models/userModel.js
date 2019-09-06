const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, 'User mast have a name'],
        trim: true
    },
    age: {
        type: Number,
        require: [true, 'User mast have an age']
    },
    email: {
        type: String,
        require: [true, 'User mast have an email'],
        unique: true,
        trim: true,
        validator: [validator.isEmail, 'Invalid email']
    },
    tel: {
        type: Number,
        validator: [validator.isNumeric, 'Invalid telephone number']
    },
    favoriteProducts: Array,
    viewedProducts: Array,
    orders: Array
});

const User = mongoose.model('User', userSchema);

module.exports = User;
