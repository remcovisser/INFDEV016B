var Level = require('./../services/level'),
    User = require('./../services/User'),
    Result = require('./../services/Result'),
    root = require('./../app.js');
    test = require('unit.js');
    mongodb = require('mongodb');


describe('Integration tests', function(){

    it('Can we find results of this user?', function(done){

        var resC = new Result();
        var result = resC.findResults("2030", function(rtn){
            test.object(rtn);
            done();
        });

    });

});
