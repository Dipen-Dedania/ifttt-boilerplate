var express    = require('express');
var router = express.Router();
const data = require('../data.json');

router.get('/', function(req, res, next) {
    const models = data.models;
    res.status(200).json({ models });
});

router.post('/', function(req, res, next) {
    console.log("setup - body", req.body);
    const cars = data.cars;
    var myData = [];
    // Add extra fields
    for(var i=0; i< 3; i++) {
        var myObj = cars[i];
        var timestamp = Date.now();
        Object.defineProperty(myObj, 'id', {value: cars[i].id});
        Object.defineProperty(myObj, 'key', {value: cars[i].id});
        // Object.defineProperty(myObj, 'timestamp', {value: timestamp});
        myData.push(myObj);
        console.log("myObj.meta_property", myObj.key);
    }
    res.status(200).json({ "data" : myData });
});

module.exports = router;