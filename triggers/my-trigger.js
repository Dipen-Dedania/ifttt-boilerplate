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
    // Add extra fields
    for(var i=0; i< cars.length; i++) {
        Object.defineProperty(cars[i], 'id', {value: cars[i].id});
        Object.defineProperty(cars[i], 'key', {value: cars[i].id});
        Object.defineProperty(cars[i], 'timestamp', {value: Date.now()});
    }
    res.status(200).json({ "data" : cars });
});

module.exports = router;