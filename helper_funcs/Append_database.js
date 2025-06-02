const fs = require(`fs`);

function write_database(mp , filename){

    try {
        let content = "";

        for(let key in mp){
            content = content + `${key},${mp[key]}\n`;
        }

        console.log(content);

        fs.writeFileSync(filename , content);

    } catch (e){
        console.log(`error in Append_database.js == ${e}`);
    }
}

module.exports = write_database;