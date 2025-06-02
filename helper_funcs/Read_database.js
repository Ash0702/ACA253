const fs = require('fs').promises;

async function Read_file(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        const lines = data.split('\n');
        const mp = {};

        for (let line of lines) {
            const [key, value] = line.trim().split(',');
            if (key && value) mp[key] = value;
        }

        return mp;
    } catch (err) {
        console.error('Error reading file:', err);
        return {};
    }
}

// Read_file(`./ACA23/database.csv`)
module.exports = Read_file;