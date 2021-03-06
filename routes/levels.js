var express = require('express'),
    router = express.Router(),
    Level = require('./../services/level'),
    User = require('./../services/User');

/* GET levels listing. */
router.get('/', User.isAuthenticated, function(req, res, next) {

    var level = new Level();

    level.all(function(levels) {
        res.render('levels', { title: 'Select a level', levels: levels });
    });
});

router.get('/:id', User.isAuthenticated, function(req, res, next) {
    var level = new Level();
    level.findByName('name', req.params.id, function(level) {

        if (level == false) {
            res.status(404);
            res.render('404', {title: 'Page not found'});
            return;
        }

        res.render('level', { title: level.name, level: level, sName : level.name});
    }, 'name');
});

router.get('/:id/:subject/:question_id', User.isAuthenticated, function(req,res,next) {
    var level = new Level();

    level.findByName('name', req.params.id, function(level) {
        if (level == false) {
            res.status(404);
            res.render('404', {title: 'Page not found'});
            return;
        }

        var qSubject = req.params.subject;
        var qId      = req.params.question_id - 1;

        for(var i = 0; i < level.subjects.length; i++) {
            var subjects = level.subjects[i];

            if(subjects.name == qSubject) {
                var questions = subjects.questions;
                var currentQuestion = questions[qId];

                if(!currentQuestion) {
                    res.status(404);
                    res.render('404', {title: 'Page not found'});
                    return;
                }
            }
        }
        res.render('exercise', { title: level.name, level: level, currentQuestion: currentQuestion, question_id: qId});
    });
});

module.exports = router;
