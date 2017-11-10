var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req,res){
  res.send(`
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <h1>Welcome To Express</h1>
    <img src="img/eka_logo-naked.png"/>
  `);
});

module.exports = router;