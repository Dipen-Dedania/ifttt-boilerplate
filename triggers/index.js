var express    = require('express');
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Trigger is called.');
    next();
});

router.use('/my_trigger', require('./my-trigger'));

module.exports = router;