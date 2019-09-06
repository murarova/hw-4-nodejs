const fs = require('fs');
const writeOrderData = require('../helpers/writeOrderData');
const { createOrderDir } = require('../helpers/createDir');

const usersList = JSON.parse(fs.readFileSync(`__dirname/../src/db/users/all-users.json`));

exports.createOrder = (req, res) => {
    // create folder "orders" on users folder
    const userId = req.body.user;
    const user = usersList.find(user => user.id * 1 === userId * 1);
    createOrderDir(user.username);

    // create order file
    const path = `__dirname/../src/db/users/${user.username}/orders/${user.username}'s order ${Date.now()}.json`;
    writeOrderData(path, req.body, res);
};
