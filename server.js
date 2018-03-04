var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var routes     = require('./routes');
// var oAuth     = require('./o-auth');
// var googleAuth     = require('./google-auth');
var {google} = require('googleapis');
var config = require('./config');
var OAuth2 = google.auth.OAuth2;


// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var oauth2Client = new OAuth2(
    config.googleClientId,
    config.clientSecret,
    config.redirectUrl
);

app.get('/oauthtest', function (req, res) {
    console.log("oauthtest");
    // generate a url that asks permissions for Google+ and Google Calendar scopes
    var scopes = [
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/calendar'
    ];

    var url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        // If you only need one scope you can pass it as a string
        scope: scopes
        // Optional property that passes state parameters to redirect URI
        // state: 'foo'
    });
    console.log("url", url);
    res.send(url);
});

app.get('/oauthcallback', function (req, res) {
    console.log("oauthcallback");
    console.log(req.query);
    var token;
    oauth2Client.getToken(req.query.code, function (err, tokens) {
        // Now tokens contains an access_token and an optional refresh_token. Save them.
        if (!err) {
            token = tokens;
            console.log("tokens", tokens);
            oauth2Client.setCredentials(tokens);
        }
    });
    res.send(token);
});

// REGISTER OUR ROUTES -------------------------------
app.use('/ifttt/v1', routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);