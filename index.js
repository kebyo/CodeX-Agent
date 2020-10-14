const cron = require('node-cron');
const fs = require('fs');
const fetch = require('node-fetch');
const config = require('./config/config').config;

cron.schedule(`*/${config.minutes} * * * *`, () => {
    fs.readdir('nginx/sites-available', async (err, files) => {
        if (!err) {
            const body = {
                name: 'Centaur',
                projects: files,
            }

            await fetch(config.apiUrl, {
                method: 'patch',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            });

        }
    });
});