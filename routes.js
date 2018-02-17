var express    = require('express');
// create our router
var router = express.Router();

//Add your key here
var iftttKey = require('./config').iftttKey;

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');

    // Add service key validation
    var serviceKey = req.get("IFTTT-Service-Key");
    // var channelKey = req.get("IFTTT-Channel-Key");
    console.log("Status check - serviceKey", serviceKey);
    if(serviceKey === iftttKey) {
        next();
    }
    else {
        const errors = [{
            "message": "Invalid channel key!"
        }];
        res.status(401).json({ errors });
    }
});

router.use('/triggers', require('./triggers') );
router.use('/actions', require('./actions') );

// test route to make sure everything is working (accessed at GET http://localhost:8080/ifttt/v1)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to ifttt!' });
});

// Send status 200 - to notify IFTTT
router.get('/status', function(req, res) {
    // var serviceKey = req.get("IFTTT-Service-Key");
    // var channelKey = req.get("IFTTT-Channel-Key");
    // console.log("Status check - serviceKey", serviceKey);
    // console.log("Status check - channelKey", channelKey);
    // if(serviceKey === iftttKey) {
    //     // res.setHeader('IFTTT-Service-Key', iftttKey);
    //     res.sendStatus(200);
    // }
    // else {
    //     res.sendStatus(401);
    // }
    res.sendStatus(200);
});


router.post('/test/setup', function(req, res) {
    var serviceKey = req.get("IFTTT-Service-Key");
    var channelKey = req.get("IFTTT-Channel-Key");
    console.log("Status check - serviceKey", serviceKey);
    console.log("setup - body", req.body);
    if(serviceKey === iftttKey) {
        // res.setHeader('IFTTT-Service-Key', iftttKey);
        res.status(200).json({ "data": { "status" : "success"} });
    }
    else {
        res.sendStatus(401);
    }
});

module.exports = router;