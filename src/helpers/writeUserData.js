const readFilePro = require('./readFilePro');
const writeUserPro = require('./writeUserPro');
const { createUserDir } = require('./createDir');

const writeUserData = async (file, user, res) => {
    try {
        // read all-users.json
        const data = await readFilePro(file);
        const parsedData = JSON.parse(data);

        //create id
        const id = parsedData[parsedData.length - 1].id + 1;
        user.id = id;

        // push data to all-users.json

        parsedData.push(user);
        const jsonData = JSON.stringify(parsedData);

        // createUserDir
        createUserDir(user.username.toLowerCase());

        //  write data to all-users.json
        await writeUserPro(file, jsonData);

        // write data to users file
        const path = `__dirname/../src/db/users/${user.username}/${user.username}.json`;
        await writeUserPro(path, JSON.stringify(user));

        res.status(201).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        console.log('Catch error: ' + err);
    }
};

module.exports = writeUserData;
