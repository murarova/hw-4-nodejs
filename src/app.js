const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const orderRouter = require('./routes/orderRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

module.exports = app;
