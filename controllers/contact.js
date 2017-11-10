var express = require('express');
var router = express.Router();

// Contact page
router.get('/contact', function(req,res){
  res.send('<h1>This is the Contact page</h1>');
});

module.exports = router;