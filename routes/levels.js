var express = require('express'),
    router = express.Router(),
    Level = require('./../services/level');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var level = new Level();

    level.all(function(levels) {
        res.render('levels', { title: 'Select a level', levels: levels });
    });
});

module.exports = router;
