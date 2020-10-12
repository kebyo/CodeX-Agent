require('dotenv').config();

exports.module = {
    API_URL: process.env.API_URL,
    MINUTES: process.env.MINUTES,
    SECONDS: process.env.SECONDS,
}