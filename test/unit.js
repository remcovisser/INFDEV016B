const test = require('unit.js');
const User = require('./../services/User');
const Result = require('./../services/Result');
const Level = require('./../services/level');

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
  
    it('Check if a question exists', () => {
        test.must(Result.validateExist(1)).be.true();
        test.must(Result.validateExist(7)).be.false();
    });

    it('Check if we can save a question + answer', () => {

        var input = "xd";
        var qna = {
            userId : 1,
            level : 1,
            subject: 1,
            question: 1,
            answer: "xd",
            points: 0
        }

        if(qna.answer == input){
            qna.points = 1;
        }

        test.must(Result.validateSave(qna)).be.true();
        // Non-existing id
        qna.userId = 23;
        test.must(Result.validateSave(qna)).be.false();
    });

    it('Check if admin', () => {
        test.must(User.checkAdmin(1)).be.false();
        test.must(User.checkAdmin(2)).be.true();
    });
});
