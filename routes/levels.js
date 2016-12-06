var express = require('express'),
    router = express.Router(),
    Level = require('./../services/level');

/* GET levels listing. */
router.get('/', function(req, res, next) {

    console.log(req.cookies.userId);

    var level = new Level();

    level.all(function(levels) {
        res.render('levels', { title: 'Select a level', levels: levels });
    });
});

router.get('/:id', function(req, res, next) {
    var level = new Level();

    level.find(req.params.id, function(level) {

        if (level == false) {
            res.status(404);
            res.render('404', {title: 'Page not found'});
            return;
        }
        
        res.render('level', { title: level.name, level: level });
    });
});

module.exports = router;
