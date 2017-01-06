var Level = require('./../services/level'),
    User = require('./../services/User'),
    Result = require('./../services/Result'),
    root = require('./../app.js');
    test = require('unit.js');

require('mongodb').MongoClient.connect('mongodb://localhost:27017/EnglishPractise', function(err, db) {
    if (err) {
        console.error('Unable to connect to MongDB:');
        throw new Error(err);
    }

describe('Integration tests', function(){
    
    it('Can we insert a new user?', function(done){
        var user = new User();
        user.authenticate("2030", function(rtn){
            test.object(rtn);
            done();
        })
    })

    it('Can we find results of this user?', function(done){

        var resC = new Result();
        var result = resC.findResults("2030", function(rtn){
            test.object(rtn);
            done();
        });

    });
});
});
