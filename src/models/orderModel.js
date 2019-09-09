const mongoose = require('mongoose');

const productListSchema = new mongoose.Schema({
    product: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        enum: {
            values: ['M', 'L', 'XL', 'XXL'],
            message: 'Type either: M, L, XL, XXL'
        }
    },
    itemsCount: Number
});

const orderShcema = new mongoose.Schema({
    creator: {
        type: String,
        trim: true
    },
    productsList: [productListSchema],
    deliveryType: {
        type: String,
        enum: {
            values: ['delivery', 'office'],
            message: 'Delivery type either: delivery or office'
        }
    },
    deliveryAdress: {
        type: String,
        trim: true
    },
    sumToPay: Number,
    status: {
        type: String,
        trim: true,
        enum: {
            values: ['inProgress', 'declined', 'finished', 'failed']
        }
    }
});

const Order = mongoose.model('Order', orderShcema);

module.exports = Order;
