var express = require('express'),
    router = express.Router(),
    User = require('./../services/User');

/* GET home page. */
router.get('/', User.isGuest, function(req, res, next) {
    res.render('index', { title: 'Welcome!' });
});

router.post('/process-login', User.isGuest, function(req, res, next) {
    var user = new User();

    // validation
    console.log( req.body);
    res.redirect( req.body.username);
    if (username == '') {
        res.redirect('/?errors[username]=required');
        return;
    }

    if (!User.validateUsername(username)) {
        res.redirect('/?errors[username]=numbers_only');
        return;
    }

    user.authenticate(username, function(result) {
        res.cookie('userId', result._id);
        res.redirect('/levels');
    });
});

router.get('/logout', User.isAuthenticated, function(req, res, next) {
    var user = new User();

    user.logOut(res);
    res.redirect('/?success[auth]=loggedOut');
});

module.exports = router;
