const express = require(`express`);
const router = express.Router();
const fs = require('fs');
const database_reader = require(`../helper_funcs/Read_database`);
// const { data } = require('framer-motion/client');

// fs.readFile('./ACA23/database.csv', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data); // Output file content as text
// });


router.post(`/Login` , async (req , res) => {
    try {
        const {name , password} = req.body;
        let database = await database_reader(`./database.csv`);

        console.log(database);
        console.log("jogj");


        for(let keys in database){
            console.log(keys, database[keys]);
        }

        if(name in database){
            if(password == database[name]){
                return res.status(200).json({
                    success : true,
                    message : "Successful log in"
                });
            } else{
                return res.status(200).json({
                    success : false,
                    message : "wrong password"
                });
            }
        } else {
            return res.status(200).json({
                success : false,
                message : "No name fouund"
            });
        }
        
    } catch (e) {
        console.log(`Error in Logn path : `);
        console.error(e);
        return res.status(500).json({
            success : false , 
            message : "Error encounterred in server"
        })
    }
})

module.exports = router
