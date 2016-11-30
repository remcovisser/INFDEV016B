var express = require('express'),
    router = express.Router(),
    Level = require('./../services/level');

/* GET levels listing. */
router.get('/', function(req, res, next) {
    var level = new Level();

    level.all(function(levels) {
        res.render('levels', { title: 'Select a level', levels: levels });
    });
});

module.exports = router;
