var express    = require('express');
var router = express.Router();
const data = require('../data.json');

router.get('/', function(req, res, next) {
    const models = data.models;
    res.status(200).json({ models });
});

router.post('/', function(req, res, next) {
    console.log("setup - body", req.body);
    const data = [{
                "id": 1,
                "url": "http://www.google.com"
            }];
    res.status(200).json({ data });
});

module.exports = router;