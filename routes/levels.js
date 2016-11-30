var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('levels', { title: 'Select a level' });
});

module.exports = router;
