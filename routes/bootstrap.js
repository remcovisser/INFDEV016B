var login = require('./login'),
    levels = require('./levels');

app.use('/', login);
app.use('/levels', levels);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});