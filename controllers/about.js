var express = require('express');
var router = express.Router();

// About page
router.get('/about', function(req,res){
  res.send('<h1>This is the About page</h1>');
});

module.exports = router;