const express = require(`express`);
const router = express.Router();
const database_writer = require(`../helper_funcs/Append_database`);
const database_reader = require(`../helper_funcs/Read_database`);
// const { data } = require("framer-motion/client");



router.post(`/Signup` , async (req , res) => {

    try {

        let mp = await database_reader(`./database.csv`);
        const { new_name , new_pass } = req.body;
        
        mp[new_name] = new_pass;

        database_writer(mp , `./database.csv`);

        return res.status(200).json({
            success : true,
            message : "Successfully added user"
        })

    } catch (e){
        console.log(`error at Signup.js ${e}`);
        return res.status(500).json({
            success : false,
            message : "Some error in backend"
        })
    }

})

module.exports = router;