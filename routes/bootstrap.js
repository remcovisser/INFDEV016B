var login = require('./login'),
    levels = require('./levels'),
    results = require('./results');

app.use('/', login);
app.use('/levels', levels);
app.use('/results', results);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
