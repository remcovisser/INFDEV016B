const test = require('unit.js');
const User = require('./../services/User');
const Result = require('./../services/Result');

// http://unitjs.com/guide/quickstart.html
describe('Unit tests', () => {

    it('Only student numbers are allowed to log-in', () => {
        test.must(User.validateUsername("Unit123")).be.false();
        test.must(User.validateUsername("123")).be.true()
    });

    it('Check if answer is correct', () => {
        test.must(Result.validateAnswer("Amsterdam", "amsterdam")).be.false();
        test.must(Result.validateAnswer("Amsterdam", "Amsterdam")).be.true()
    })

});
