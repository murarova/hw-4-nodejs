const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.param('id', productController.checkId);

router.route('/').get(productController.getProducts);
router.route('/:id').get(productController.getProduct);

module.exports = router;
