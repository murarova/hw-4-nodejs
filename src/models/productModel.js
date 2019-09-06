const mongoose = require('mongoose');
const validator = require('validator');

const productSchema = new mongoose.Schema({
    sku: {
        type: Number,
        require: [true, 'Product mast have a sku'],
        unique: true
    },
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: { type: Number, required: true },
    currency: {
        type: String,
        validator: [validator.isCurrency, 'Invalid currency']
    },
    creatorId: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    modified: {
        type: Date,
        default: Date.now()
    },
    categories: Array
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
