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

// Our unit tests
describe('Unit tests', function(){

    // goede unit test voorbeeld:
    // Compare de data in de onderstaande functie met data die je ontvangt (als parameter(s))
    // Als het goed is return je true, anders false.
    // Dit is dus unit testing
    // it('Is logged in?', function(username, password){
    //     var userData = {
    //         username: 12345,
    //         password: 'not_encrypted_password',
    //     };

    //     if(username == userData.username && password == userData.password) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // });

    // if(unit-test-name)
    it('Is it a string?', function(){
        // just for example of tested value
        var string = "Lol nee.";
        // Use the test object to check whether the value is..
        test
            //a string..
            .string(string)
            //starts with hello
            .startsWith('Lol')
            //contains just letters..
            .match(/[a-z]/)
    });


    it('Question saved?', function(){
        var questionData = {
            level: "C1",
            subject: "Spelling",
            question: 5,
            points: 1,
            answer: "TOPKEK",
            userId: 3
        };

        test.number(questionData.userId);

    });

    it('Is it a valid student number?', function(){
        // the given student number
        var studentnumber = 123;

        test
            .number(studentnumber)
    });

    it('Are our levels (including) valid?', function(){
        // our levels
        var levels =
        {
            name: "Level 1",
            subjects:
            {
                name: "Grammar",
                questions:
                [
                    {
                        question_id : 21,
                        question: "Is it a potato?",
                        answer : "Yes"
                    },
                    {
                        question_id : 40,
                        question: "Is Andy kut?",
                        answer : "Yes"
                    },
                    {
                        question_id : 69,
                        question : "Is this a meme-free zone?",
                        answer : "No"
                    }

                ]
            }
        };

        // Use the check object whether it has the values
        test
            .object(levels)
                .hasProperty('name')
                .hasProperty('subjects')
                .object(levels.subjects)
                    .hasProperty('name')
                    .hasProperty('questions')
                        .array(levels.subjects.questions)
                            .contains(
                            [
                                {
                                    question_id : 21,
                                    question: "Is it a potato?",
                                    answer : "Yes"
                                },
                                {
                                    question_id : 40,
                                    question: "Is Andy kut?",
                                    answer : "Yes"
                                },
                                {
                                    question_id : 69,
                                    question : "Is this a meme-free zone?",
                                    answer : "No"
                                }

                            ]
                            )
    })




    // Check if an answer is the correct answer
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
