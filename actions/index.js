var express    = require('express');
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Action is called.');
    next();
});

router.use('/say-hello', require('./say-hello'));

module.exports = router;