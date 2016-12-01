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

router.get('/level', function(req, res, next) {
    var level = new Level();

    /*level.get(function(level)) {
        res.render('level', { title: level.name, level : level});
    });*/

    res.render('level', { title: 'Level 1' });
});

module.exports = router;
