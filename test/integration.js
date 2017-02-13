const Level = require('./../services/level'),
    User = require('./../services/User'),
    Result = require('./../services/Result'),
    root = require('./../app.js'),
    test = require('unit.js');

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
        })
    })
});
