require('dotenv').config();

const config = {
    apiUrl: process.env.API_URL,
    minutes: process.env.MINUTES,
    seconds: process.env.SECONDS,
}

module.exports.config = config;