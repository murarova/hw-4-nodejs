const fs = require('fs');

const products = JSON.parse(fs.readFileSync(`__dirname/../src/db/products/products.json`));

exports.checkId = (req, res, next, val) => {
    if (!products.find(el => el.id * 1 === val * 1)) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
};

exports.getProducts = (req, res) => {
    // get a few products by ids

    if (req.query.ids) {
        const idsArr = req.query.ids.slice(1, req.query.ids.length - 1).split(',');
        const result = [];

        idsArr.forEach(el => {
            products.forEach(product => {
                if (product.id * 1 === el * 1) result.push(product);
            });
        });

        if (result.length === 0) {
            return res.status(404).json({
                status: 'fail',
                message: 'No products found',
                results: result.length,
                data: {
                    products: null
                }
            });
        }
        return res.status(200).json({
            status: 'success',
            results: result.length,
            data: {
                products: result
            }
        });
    }

    // get products by category

    if (req.query.category) {
        const category = req.query.category.slice(1, req.query.category.length - 1);
        const result = products.filter(el => el.categories.find(el => el === category));

        if (result.length === 0) {
            return res.status(404).json({
                status: 'fail',
                message: 'No products found',
                results: result.length,
                data: {
                    products: null
                }
            });
        }
        return res.status(200).json({
            status: 'success',
            results: result.length,
            data: {
                products: result
            }
        });
    }

    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products
        }
    });
};

exports.getProduct = (req, res) => {
    const product = products.filter(el => el.id * 1 === req.params.id * 1);

    res.status(200).json({
        status: 'success',
        data: {
            product
        }
    });
};
