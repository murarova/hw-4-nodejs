const fs = require('fs');

exports.createUserDir = userName => {
    fs.mkdir(`__dirname/../src/db/users/${userName}`, { recursive: true }, err => {
        if (err) throw err;
    });
};

exports.createOrderDir = userName => {
    fs.mkdir(`__dirname/../src/db/users/${userName}/orders`, { recursive: true }, err => {
        if (err) throw err;
    });
};
