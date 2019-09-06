const writeUserPro = require('./writeUserPro');

const writeOrderData = async (path, data, res) => {
    try {
        const jsonData = JSON.stringify(data);
        await writeUserPro(path, jsonData);

        res.status(201).json({
            status: 'success',
            data: {
                order: data
            }
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = writeOrderData;
