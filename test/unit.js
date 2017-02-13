const test = require('unit.js');
const User = require('./../services/User');
const Result = require('./../services/Result');
const Level = require('./../services/Level');

// http://unitjs.com/guide/quickstart.html
describe('Unit tests', () => {

    it('Only student numbers are allowed to log-in', () => {
        test.must(User.validateUsername("Unit123")).be.false();
        test.must(User.validateUsername("123")).be.true()
    });

    it('Check if answer is correct', () => {
        test.must(Result.validateAnswer("Amsterdam", "amsterdam")).be.false();
        test.must(Result.validateAnswer("Amsterdam", "Amsterdam")).be.true()
    });

   it('Check if we can find a level', function(done) {
        var level = new Level();

        level.findByName('name', 'A1', function(level) {     
            test.object(level);
            done();
        });
   });

   it('Check if we cant find a level', function(done) {
        var level = new Level();

        level.findByName('name', 'D1', function(level) {    
            test.bool(level);
            done();
        });
   });
});
