const express = require('express');
const os = require('os');
const router = express.Router();
const mysql = require('../mysqlconnection');

router.get('/api/getUsername', function(req,res,next){
    res.send({username:os.userInfo().username});
});

router.get('/getData', (req,res) => {
    mysql.query("select * from topic;", (err, rows) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});

module.exports = router;