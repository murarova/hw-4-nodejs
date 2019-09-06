const fs = require('fs');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) return reject('Error reading file: ' + err);
            resolve(data);
        });
    });
};

module.exports = readFilePro;
