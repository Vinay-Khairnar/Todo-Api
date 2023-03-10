
const mongoose = require('mongoose')
const config = require('../Config/config')
async function connect() {
     return new Promise((resolve, reject) => {
        mongoose.connect(config.MONGO_URL, (err) => {
            if (err) {
                console.log('Error in connecting to database')
                return reject(err);
            }
            resolve();
        })
    })
}

module.exports = connect;
