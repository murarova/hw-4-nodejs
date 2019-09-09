const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router
    .route('/')
    .post(ordersController.createOrder)
    .get(ordersController.getAllOrders);
router.route('/:id').get(ordersController.getOrder);

module.exports = router;
