var express = require('express'),
    router = express.Router(),
    Level = require('./../services/level'),
    User = require('./../services/User'),
    Result = require('./../services/Result');

/* The the results of the question */
router.get('/:level/:subject/:question/:points/:answer', User.isAuthenticated, function(req,res,next) {
  var result = new Result();
  result.save(req.params.level, req.params.subject, req.params.question, req.params.points, req.params.answer, req.cookies.userId, function(message) {
      res.send('Saved');
  });
  res.send('Failed to save');
});

module.exports = router;
