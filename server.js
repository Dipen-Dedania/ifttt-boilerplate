var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var routes     = require('./routes');


// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// REGISTER OUR ROUTES -------------------------------
app.use('/ifttt/v1', routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);