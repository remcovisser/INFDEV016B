var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.collection('exercises').find({}).toArray(function(err, col) {
        res.send(col);
    });

    // res.render('levels', { title: 'Select a level' });
});

module.exports = router;
