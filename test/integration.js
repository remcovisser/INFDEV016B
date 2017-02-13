const Level = require('./../services/level'),
    User = require('./../services/User'),
    Result = require('./../services/Result'),
    root = require('./../app.js'),
    test = require('unit.js'),
    hippie = require('hippie');

require('../app');

require('mongodb').MongoClient.connect('mongodb://localhost:27017/EnglishPractise', (err, db) => {
    if (err) {
        console.error('Unable to connect to MongDB:');
        throw new Error(err)
    }

    describe('Integration tests', () => {

        it('Can we insert a new user?', done => {
            const user = new User();
            user.authenticate("2030", rtn => {
                test.object(rtn);
                done()
            })
        });

        it('Can we find results of this user?', done => {

            const resC = new Result();
            resC.findResults("2030", rtn => {
                test.object(rtn);
                done()
            })
        });

        it('Check middleware', function(done) {
            hippie(app)
                .get('/levels/A2')
                .expectStatus(302)
                .end(function(err, res, body) {
                    if (err) throw err;
                    done()
                })
        });

        it('Check frontpage', done => {
            hippie(app)
                .get('/')
                .expectStatus(200)
                .end((err, res, body) => {
                    if (err) throw err;
                    done()
                })
        });

        it('Check authentication validation with invalid inputs', done => {
            hippie(app)
                .json()
                .post('/process-login')
                .send({
                    username: 'abc'
                })
                .expectStatus(302)
                .expectHeader('location', '/?errors[username]=numbers_only')
                .end((err, res, body) => {
                    if (err) throw err;
                    done()
                })
        });

        it('Check authentication validation with valid inputs', done => {
            hippie(app)
                .json()
                .post('/process-login')
                .use(persistCookies)
                .send({
                    username: '0908765'
                })
                .expectStatus(302)
                .expectHeader('location', '/levels')
                .end((err, res, body) => {
                    if (err) throw err;
                    done()
                })
        });

        it('Check levels overview', done => {
            hippie(app)
                .get('/levels')
                .use(persistCookies)
                .expectStatus(200)
                .end((err, res, body) => {
                    if (err) throw err;
                    done()
                })
        });

        it('Check level overview', done => {
            hippie(app)
                .get('/levels/A1')
                .use(persistCookies)
                .expectStatus(200)
                .end((err, res, body) => {
                    if (err) throw err;
                    done()
                })
        });

        it('Check level', done => {
            hippie(app)
                .get('/levels/A1/Quantifiers/1')
                .use(persistCookies)
                .expectStatus(200)
                .end((err, res, body) => {
                    if (err) throw err;
                    done()
                })
        });

        it('Insert wrong answer', done => {
            hippie(app)
                .get('/results/C2/Quantifiers/2/1/many')
                .use(persistCookies)
                .expectStatus(200)
                .expectBody('Saved')
                .end((err, res, body) => {
                    if (err) throw err;
                    done()
                })
        });

        it('Insert correct answer', done => {
            hippie(app)
                .get('/results/C2/Quantifiers/2/1/much')
                .use(persistCookies)
                .expectStatus(200)
                .expectBody('Saved')
                .end((err, res, body) => {
                    if (err) throw err;
                    done()
                })
        });

        it('Result page', done => {
            hippie(app)
                .get('/results')
                .use(persistCookies)
                .expectStatus(200)
                .end((err, res, body) => {
                    if (err) throw err;
                    done()
                })
        })

    })
});

function persistCookies(opts, next) {
    opts.jar = true;
    next(opts)
}