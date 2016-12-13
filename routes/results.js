var express = require('express'),
    router = express.Router(),
    Level = require('./../services/level'),
    User = require('./../services/User'),
    Result = require('./../services/Result');

/* The the results of the question */
router.get('/:id/:subject/:question_id/:result', User.isAuthenticated, function(req,res,next) {
  var result = new Result();
  result.save(function(message) {
      res.send('Saved');
  });
  res.send('Failed to save');
});

router.get('/:id', User.isAuthenticated, function(req,res,next) {
    var result = new Result();
    result.findResults(req.params.id, function(data){
        res.render('results', { title: 'Your results', results: data });
    });
});

module.exports = router;
