const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('../models/productModel');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB connection successfull'));

// READ JSON FILE

const product = JSON.parse(fs.readFileSync(`${__dirname}/products/products.json`, 'utf-8'));

// IMPORT DATA INTO DB

const importData = async () => {
    try {
        await Product.create(product);
        console.log('Data successfully loaded');
        process.exit();
    } catch (err) {
        console.log(err);
    }
};

// DELETE DATA FROM DB

const deleteData = async () => {
    try {
        await Product.deleteMany();
        console.log('Data successfully deleted');
        process.exit();
    } catch (err) {
        console.log(err);
    }
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
