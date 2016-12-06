var express = require('express'),
    router = express.Router(),
    User = require('./../services/User');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome!' });
});

router.post('/process-login', function(req, res, next) {
    var user = new User();

    // validation
    var username = req.body.username;
    if (username == '') {
        res.redirect('/?errors[username]=required');
    }

    user.authenticate(username, function(result) {
        res.cookie('userId', result._id);
        res.redirect('/levels');
    });
});

module.exports = router;
