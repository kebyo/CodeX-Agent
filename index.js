const cron = require('node-cron');
const fs = require('fs');
const fetch = require('node-fetch');
const config = require('./config/config');

cron.schedule(`*/${config.SECONDS} * * * * *`, () => {
    fs.readdir('nginx/sites-available', async (err, files) => {
        if (!err){
            const body = {
                name: 'Centaur',
                projects: files,
            }

            await fetch(config.API_URL, {
                method: 'patch',
                body: JSON.stringify(body),
            });
        }
    });
});