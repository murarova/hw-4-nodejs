const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');
const checkProductsStok = require('../helpers/checkProductsStok');

router.route('/').post(checkProductsStok, ordersController.createOrder);

module.exports = router;
