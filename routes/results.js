var express = require('express'),
    router = express.Router(),
    Level = require('./../services/level'),
    User = require('./../services/User'),
    Result = require('./../services/Result');

/* The the results of the question */
router.get('/:level/:subject/:question/:points/:answer', User.isAuthenticated, function(req,res,next) {
  var result = new Result();
  result.save(req.params.level, req.params.subject, req.params.question, req.params.points, req.params.answer, app.locals.currentUser.username, function(successful) {
      if (successful) {
          res.send('Saved');
      } else {
          res.send('Failed to save');
      }
  });

});

router.get('/', User.isAuthenticated, function(req,res,next) {
    var result = new Result();
    result.findResults(app.locals.currentUser.username, function(data){
        res.render('results', { title: 'Your results', results: data });
    });
});

module.exports = router;
