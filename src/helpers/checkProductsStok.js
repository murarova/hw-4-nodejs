const fs = require('fs');

const products = JSON.parse(fs.readFileSync(`__dirname/../src/db/products/products.json`));

const checkProductsStok = (req, res, next) => {
    const productsInOrder = req.body.products;
    const inStok = productsInOrder.every(productId => products.find(product => product.id === productId));
    if (!inStok) {
        return res.status(404).json({ status: 'failed', order: null });
    }
    next();
};

module.exports = checkProductsStok;
