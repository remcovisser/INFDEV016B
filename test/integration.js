const Level = require('./../services/level'),
    User = require('./../services/User'),
    Result = require('./../services/Result'),
    root = require('./../app.js'),
    test = require('unit.js');
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

        it('Check middleware', function (done) {
            hippie(app)
            .get('/levels/A2')
            .expectStatus(302)
            .end(function(err, res, body) {
                if (err) throw err;
                done();
            });
        });

          it('Website online', function (done) {
            hippie(app)
            .get('/')
            .expectStatus(200)
            .end(function(err, res, body) {
                if (err) throw err;
                done();
            });
        });

         it('Login', function (done) {
            hippie(app)
            .json()
            .post('/process-login')
            .send(JSON.stringify({ 
                username: 1123123128723
            }))
            .expectBody('"iets"')
            .end(function(err, res, body) {
                if (err) throw err;
                done();
            });
        });


    })
});
