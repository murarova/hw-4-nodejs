const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        if (req.query.category) {
            const filter = products.filter(product =>
                product.categories.find(category => category === req.query.category)
            );

            return res.status(200).json({
                status: 'success',
                result: filter.length,
                data: {
                    products: filter
                }
            });
        }

        if (req.query.ids) {
            const ids = req.query.ids.split(',');
            const result = [];
            ids.map(id =>
                products.map(product => {
                    if (product.id === id) {
                        result.push(product);
                    }
                })
            );

            return res.status(200).json({
                status: 'success',
                result: result.length,
                data: {
                    products: result
                }
            });
        }

        res.status(200).json({
            status: 'success',
            result: products.length,
            data: {
                products
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        console.log(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                product
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const newProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidation: true });

        res.status(200).json({
            status: 'success',
            data: {
                product: newProduct
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
