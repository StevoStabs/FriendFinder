var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/html-routes.js');
var apiRoutes = require('./app/routing/api-routes.js');
var PORT = process.env.NODE_ENV || 3000;

var app = express();


// app.use(express.static('app/public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));
require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});