const fs = require('fs');

const writeUserPro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) return reject(err);
            resolve('success');
        });
    });
};

module.exports = writeUserPro;
