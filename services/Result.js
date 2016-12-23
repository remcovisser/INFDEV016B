'use strict';

module.exports = class Result {
    constructor() {
        this.collection = db.collection('results');
    }

    save(level, subject, question, points, answer, userId, callback) {
      this.findResults(userId, function(data) {
          if(data) {
            console.log(data);
            var lvls = data.levels;
            // Loop through levels
            for (var i = 0; i < lvls.length; i++) {
                var lvlName = lvls[i].name;
                var lvlSubjs = lvls[i].subjects;

                if(lvlName == level) {
                    // Loop through subjects
                    for (var j = 0; j < lvlSubjs.length; j++) {

                      var subjName = lvlSubjs[j].name;
                      var subjQA = lvlSubjs[j].questions;

                      if(subjName == subject) {
                        // Loop through questions
                        for(var l = 0; l < subjQA.length; l++){

                          var qID = subjQA[l].id;

                          if(qID == question) {
                            subjQA[l].answer = answer;
                            subjQA[l].points = points;
                          }

                        }

                      }
                    }

                }
            }
            db.collection('results').remove({'_id' : userId})
            db.collection('results').insert([data]);
          }
      });

      callback("test");
    }

    findResults(value, callback) {
        this.collection.find({ _id: value }).toArray(function(err, data) {
            if (data.length == 0) {
                return callback(false);
            }
            return callback(data[0]);
        })
      }

      newResult(username) {
        var seederData = [];
            seederData.push({
              _id : username,
              levels: [
                {'_id' : 1, 'name' : 'A1',
                 'subjects' : [
                   {'name' : 'Word order'},
                   {'name' : 'Quantifiers'},
                   {'name' : 'Capitalization'},
                   {'name' : 'Spelling'},
                   {'name' : 'Reading comprehension'},
                   {'name' : 'Questions',
                    'questions' : [{
                            id: 1,
                            question: "When are you leaving (yesterday / in 9 o'clock / at 9 o'clock)?",
                            answer: "At 9 o'clock",
                            points: 0
                        },
                        {
                            id: 2,
                            question: "Where are you going? (by train, to France, in 9 minutes)",
                            answer: "to France",
                            points: 0
                        },
                        {
                            id: 3,
                            question: "How will you go there? (tomorrow / by plane / in 6 minutes)",
                            answer: "by plane",
                            points: 0
                        },
                        {
                            id: 4,
                            question: "Why are you going? (by plane, because it's his birthday, im bored)",
                            answer: "because it's his birthday",
                            points: 0
                        },
                        {
                            id: 5,
                            question: "Who is joining you? (Peter, someone, I'm going)",
                            answer: "Peter",
                            points: 0
                        },
                        {
                            id: 6,
                            question: "Whose suitcase is that? (Johnny's, my dog's, hers)",
                            answer: "Johnny's",
                            points: 0
                        },
                        {
                            id: 7,
                            question: "What book will you read? (That book, in 9 minutes, a manga)",
                            answer: "That book",
                            points: 0
                        },
                        {
                            id: 8,
                            question: "What language are you studying? (France, Greece, Japanese)",
                            answer: "Japanese",
                            points: 0
                        },
                        {
                            id: 9,
                            question: "What is your dog's name? (You are my dog, Woof, Dad)",
                            answer: "Woof",
                            points: 0
                        },
                        {
                            id: 10,
                            question: "On what date was your dog born? (a few days ago, 20 minutes from now on, January 1st)",
                            answer: "January 1st",
                            points: 0
                      }]
                  }
                 ]
                },
                {'_id' : 2, 'name' : 'A2',
                'subjects' : [
                   {'name' : 'Word order'},
                   {'name' : 'Quantifiers'},
                   {'name' : 'Capitalization'},
                   {'name' : 'Spelling'},
                   {'name' : 'Reading comprehension'},
                   {'name' : 'Questions',
                    'questions' : [{
                            id: 1,
                            question: "(what, when, why) do you like the most?",
                            answer: "what",
                            points: 0
                        },
                        {
                            id: 2,
                            question: "(where, when, what) does Bill get up in the morning?",
                            answer: "when",
                            points: 0
                        },
                        {
                            id: 3,
                            question: "(why, when, how) don't you go by bus, Max?",
                            answer: "why",
                            points: 0
                        },
                        {
                            id: 4,
                            question: "(how, where, what) hobbies do you have?",
                            answer: "what",
                            points: 0
                        },
                        {
                            id: 5,
                            question: "(what, where, how) do they go to every week?",
                            answer: "where",
                            points: 0
                        },
                        {
                            id: 6,
                            question: "(when, how, what) old is Mike?",
                            answer: "how",
                            points: 0
                        },
                        {
                            id: 7,
                            question: "(what, when, how) is Susan's birthday?",
                            answer: "when",
                            points: 0
                        },
                        {
                            id: 8,
                            question: "(why, where, what) are my exercise books?",
                            answer: "where",
                            points: 0
                        },
                        {
                            id: 9,
                            question: "(who, what, why) are you doing at the moment, Peter?",
                            answer: "what",
                            points: 0
                        },
                        {
                            id: 10,
                            question: "(what, where, why) do they live?",
                            answer: "where",
                            points: 0
                        }]
                  }
                 ]
                },
                {'_id' : 3, 'name' : 'B1',
                'subjects' : [
                   {'name' : 'Word order'},
                   {'name' : 'Quantifiers'},
                   {'name' : 'Capitalization'},
                   {'name' : 'Spelling'},
                   {'name' : 'Reading comprehension'},
                   {'name' : 'Questions',
                   'questions' : [{
                            id: 1,
                            question: "(What, Why, Where, How, When) is the weather like today?",
                            answer: "What",
                            points: 0
                        },
                        {
                            id: 2,
                            question: "(What, Why, Where, How, When) don't you like pears?",
                            answer: "Why",
                            points: 0
                        },
                        {
                            id: 3,
                            question: "(What, Why, Where, How, When) is the flying vehicle called?",
                            answer: "What",
                            points: 0
                        },
                        {
                            id: 4,
                            question: "(What, Why, Where, How, When) is my shirt",
                            answer: "Where",
                            points: 0
                        },
                        {
                            id: 5,
                            question: "(What, Why, Where, How, When) do they get to school?",
                            answer: "How",
                            points: 0
                        },
                        {
                            id: 6,
                            question: "(What, Why, Where, How, When) does your father go to work?",
                            answer: "When",
                            points: 0
                        },
                        {
                            id: 7,
                            question: "(What, Why, Where, How, When) does your father work?",
                            answer: "Where",
                            points: 0
                        },
                        {
                            id: 8,
                            question: "(What, Why, Where, How, When) is his job?",
                            answer: "What",
                            points: 0
                        },
                        {
                            id: 9,
                            question: "(What, Why, Where, How, When) do you like your coffee?",
                            answer: "How",
                            points: 0
                        },
                        {
                            id: 10,
                            question: "(What, Why, Where, How, When) is the point of making this dumb project?",
                            answer: "What",
                            points: 0
                        }]
                    }
                 ]
                },
                {'_id' : 4, 'name' : 'B2',
                'subjects' : [
                   {'name' : 'Word order'},
                   {'name' : 'Quantifiers'},
                   {'name' : 'Capitalization'},
                   {'name' : 'Spelling'},
                   {'name' : 'Reading comprehension'},
                   {'name' : 'Questions'}
                 ] },
                {'_id' : 5, 'name' : 'A1',
                'subjects' : [
                    {'name' : 'Word order'},
                    {'name' : 'Quantifiers'},
                    {'name' : 'Capitalization'},
                    {'name' : 'Spelling'},
                    {'name' : 'Reading comprehension'},
                    {'name' : 'Questions'}
                  ]
                },
                {'_id' : 6, 'name' : 'A2',
                'subjects' : [
                    {'name' : 'Word order'},
                    {'name' : 'Quantifiers'},
                    {'name' : 'Capitalization'},
                    {'name' : 'Spelling'},
                    {'name' : 'Reading comprehension'},
                    {'name' : 'Questions'}
                 ]
                }
              ]
            });
            return seederData;
      }
};
