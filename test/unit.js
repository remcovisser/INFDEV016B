var test = require('unit.js');
const User = require('./../services/User');
// http://unitjs.com/guide/quickstart.html
describe('Unit tests', function(){

    it('Only student numbers are allowed to log-in', function() {
        var username = 'Unit123';
        test.must(User.validateUsername(username)).be.false();
    });

    // Unit test for checking if an answer is correctAnswer
    it('TestCorrectAnswer', function() {
      function _TestCorrectAnswer(userAnswer) {
        var correctAnswer = 1;
        var result;
        if(correctAnswer == userAnswer) {
           return true;
        } else {
          return false;
        }
      }

      test.must(_TestCorrectAnswer(0)).be.false();
      test.must(_TestCorrectAnswer(1)).be.true();
    });

});
