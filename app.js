var express = require('express');
var app = express();

// Set port
app.set('port', process.env.PORT || 3000);

// Set directory for static files
app.use(express.static('public'));

// Controllers for each page
app.use(require('./controllers/index'));
app.use(require('./controllers/about'));
app.use(require('./controllers/contact'));

var server = app.listen(app.get('port'), function(){
  console.log('Listening on port' + app.get('port'));
});
