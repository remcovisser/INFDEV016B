var test = require('unit.js');

/* You can use...

.string
.startsWith / .endsWith
.contains
.given (change value)
.match (pregmatch)
.when (name, function(){ }; })
.then (name, function(){ }; })
documentation: http://unitjs.com/guide/quickstart.html
documentation: http://unitjs.com/

*/

// Our unit tests --- these are L O C A L
describe('Unit tests', function(){

    it('Question saved?', function(){
        
        var questionData = {
            level: "C1",
            subject: "Spelling",
            question: 5,
            points: 1,
            answer: "TOPKEK",
            userId: 3
        };

        test
            .number(questionData.userId)
            .string(questionData.answer);

    });

});