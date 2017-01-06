'use strict';

module.exports = class Result {
    constructor() {
        this.collection = db.collection('results');
    }

    save(level, subject, question, points, answer, userId, callback) {
        var that = this;

        this.findResults(userId, function(data) {
            if (data) {
                var lvls = data.levels;

                // Loop through levels
                for (var i = 0; i < lvls.length; i++) {
                    var lvlName = lvls[i].name;
                    var lvlSubjs = lvls[i].subjects;

                    if (lvlName == level) {
                        // Loop through subjects
                        for (var j = 0; j < lvlSubjs.length; j++) {

                            var subjName = lvlSubjs[j].name;
                            var subjQA = lvlSubjs[j].questions;

                            if (subjName == subject) {
                                // Loop through questions
                                for (var l = 0; l < subjQA.length; l++) {

                                    var qID = subjQA[l].id;

                                    if (qID == question) {
                                        subjQA[l].answer = answer;
                                        subjQA[l].points = points;
                                    }

                                }

                            }
                        }

                    }
                }

                // Update results table
                that.collection.removeOne({ '_id': userId })
                    .then(() => {
                        return that.collection.insertOne(data);
                    })
                    .then(() => {
                        callback(true);
                    })
                    .catch(() => {
                        callback(false);
                    });


            } else {
                callback(false)
            }
        });
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
            _id: username,
            levels: [
                {
                    '_id': 1, 'name': 'A1',
                    'subjects': [
                        { 'name': 'Word order' },
                        {
                          'name': 'Quantifiers',
                          'questions': [
                            {
                                id: 1,
                                question: "How .... money have you got? (much/many)",
                                answer: "much",
                                points: 0
                            },
                            {
                                id: 2,
                                question: "He has .... money left. (a little/a few)",
                                answer: "a little",
                                points: 0
                            },
                            {
                                id: 3,
                                question: ".... time (much/many)",
                                answer: "much",
                                points: 0
                            },
                            {
                                id: 4,
                                question: ".... children (much/many)",
                                answer: "many",
                                points: 0
                            },
                            {
                                id: 5,
                                question: "There are two boys. .... is smiling. (each/every)",
                                answer: "each",
                                points: 0
                            },
                            {
                                id: 6,
                                question: "The students .... received a free copy of the magazine. (each/every)",
                                answer: "each",
                                points: 0
                            },
                            {
                                id: 7,
                                question: "Can I have .... of these apples? (some/any)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 8,
                                question: "Have you got .... apples? (some/any)",
                                answer: "any",
                                points: 0
                            },
                            {
                                id: 9,
                                question: "There is .... wrong with our car. (something/anything)",
                                answer: "something",
                                points: 0
                            },
                            {
                                id: 10,
                                question: "She looked ill, ..... . (somehow/anyhow/someway/anyway)",
                                answer: "somehow",
                                points: 0
                            }
                        ]
                        },
                        { 'name': 'Capitalization' },
                        { 'name': 'Spelling' },
                        { 'name': 'Reading comprehension' },
                        {
                            'name': 'Questions',
                            'questions': [{
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
                {
                    '_id': 2, 'name': 'A2',
                    'subjects': [
                        { 'name': 'Word order' },
                        {
                          'name': 'Quantifiers',
                          'questions': [
                            {
                                id: 1,
                                question: "I have .... good idea (a/an)",
                                answer: "a",
                                points: 0
                            },
                            {
                                id: 2,
                                question: "That's an interesting job! (a/an)",
                                answer: "an",
                                points: 0
                            },
                            {
                                id: 3,
                                question: ".... time (a little/a bit)",
                                answer: "a little",
                                points: 0
                            },
                            {
                                id: 4,
                                question: ".... houses (a few/a little)",
                                answer: "a few",
                                points: 0
                            },
                            {
                                id: 5,
                                question: ".... of the students has three books.. (Each/Every)",
                                answer: "Each",
                                points: 0
                            },
                            {
                                id: 6,
                                question: "There is .... bus every 2 hours. (a/an)",
                                answer: "a",
                                points: 0
                            },
                            {
                                id: 7,
                                question: "Can I have .... of these apples? (some/any)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 8,
                                question: "How .... players are in a handball team? (many/any)",
                                answer: "many",
                                points: 0
                            },
                            {
                                id: 9,
                                question: "How much pocket money do you get per week? (much/many)",
                                answer: "much",
                                points: 0
                            },
                            {
                                id: 10,
                                question: "I've got .... in my eye (something/someway/anyway)",
                                answer: "something",
                                points: 0
                            }
                        ]
                        },
                        { 'name': 'Capitalization' },
                        { 'name': 'Spelling' },
                        { 'name': 'Reading comprehension' },
                        {
                            'name': 'Questions',
                            'questions': [{
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
                {
                    '_id': 3, 'name': 'B1',
                    'subjects': [
                        { 'name': 'Word order' },
                        {
                          'name': 'Quantifiers',
                          'questions': [
                            {
                                id: 1,
                                question: "We need .... bananas.? (some/many)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 2,
                                question: "You can't buy .... posters in this shop. (some/any)",
                                answer: "any",
                                points: 0
                            },
                            {
                                id: 3,
                                question: "They have found .... gold in that old mine. (some/none)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 4,
                                question: "* Do the Smiths have .... yellow van? (a/an)",
                                answer: "a",
                                points: 0
                            },
                            {
                                id: 5,
                                question: ".... cheese (A little/A few)",
                                answer: "A little",
                                points: 0
                            },
                            {
                                id: 6,
                                question: ".... cars. (A few/A little)",
                                answer: "A few",
                                points: 0
                            },
                            {
                                id: 7,
                                question: "There are four worksheets - please take one of .... (each/some)",
                                answer: "each",
                                points: 0
                            },
                            {
                                id: 8,
                                question: "We enjoyed .... minute of our holidays. (every/any)",
                                answer: "every",
                                points: 0
                            },
                            {
                                id: 9,
                                question: "How .... time is left? (much/many)",
                                answer: "much",
                                points: 0
                            },
                            {
                                id: 10,
                                question: "How .... sisters does Ella have? (many/much)",
                                answer: "many",
                                points: 0
                            }
                        ]
                        },
                        { 'name': 'Capitalization' },
                        { 'name': 'Spelling' },
                        { 'name': 'Reading comprehension' },
                        {
                            'name': 'Questions',
                            'questions': [{
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
                {
                    '_id': 4, 'name': 'B2',
                    'subjects': [
                        { 'name': 'Word order' },
                        {
                          'name': 'Quantifiers',
                          'questions': [
                            {
                                question: "We haven't heard .... about Peter. Is he ill? (anything/something)",
                                answer: "anything",
                                points: 0
                            },
                            {
                                question: "Do you live .... near Mandy? (anywhere/somewhere)",
                                answer: "anywhere",
                                points: 0
                            },
                            {
                                question: "Peter has bought .... new books. (some/none)",
                                answer: "some",
                                points: 0
                            },
                            {
                                question: "She always takes .... sugar with her coffee. (some/any)",
                                answer: "some",
                                points: 0
                            },
                            {
                                question: "There are two boys. .... is smiling. (each/every)",
                                answer: "each",
                                points: 0
                            },
                            {
                                question: "Look! He's having .... sandwiches. (some/ever)",
                                answer: "some",
                                points: 0
                            },
                            {
                                question: "Can I have .... of these apples? (some/any)",
                                answer: "some",
                                points: 0
                            },
                            {
                                question: "He always likes .... piece of chocolate. (a/an)",
                                answer: "a",
                                points: 0
                            },
                            {
                                question: ".... little money (A/An)",
                                answer: "A",
                                points: 0
                            },
                            {
                                question: ".... children (A few/A little)",
                                answer: "A few",
                                points: 0
                            }
                        ]
                        },
                        { 'name': 'Capitalization' },
                        { 'name': 'Spelling' },
                        { 'name': 'Reading comprehension' },
                        {
                            'name': 'Questions',
                            'questions': [{
                                id: 1,
                                question: "(Did, Does, Do) you know where we have to go?",
                                answer: "Do",
                                points: 0
                            },
                                {
                                    id: 2,
                                    question: "(Did, Does, Do) your father make breakfast often",
                                    answer: "Does",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "(Did, Does, Do) you upload pictures?",
                                    answer: "Do",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "(Did, Does, Do) you go on holiday last year?",
                                    answer: "Did",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "(Did, Does, Do) he care?",
                                    answer: "Does",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "I think he (Did, Does, Do).",
                                    answer: "does",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "(Did, Does, Do) you learn how to cook?",
                                    answer: "Did",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "What (Did, Does, Do) you do after school?",
                                    answer: "do",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "(Did, Does, Do) your cats climb trees?",
                                    answer: "Do",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "(Did, Does, Do) your friend visit museums?",
                                    answer: "Does",
                                    points: 0
                                }
                            ]
                        }
                    ]
                },
                {
                    '_id': 5, 'name': 'A1',
                    'subjects': [
                        { 'name': 'Word order' },
                        {
                          'name': 'Quantifiers',
                          'questions': [
                            {
                                id: 1,
                                question: "They .... have their own e-mail address. (each/some)",
                                answer: "each",
                                points: 0
                            },
                            {
                                id: 2,
                                question: "We lost $20 .... (each/some)",
                                answer: "each",
                                points: 0
                            },
                            {
                                id: 3,
                                question: "There are .... apples on the table. (some/any)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 4,
                                question: "Pam does not have .... pencils on her desk. (any/many)",
                                answer: "any",
                                points: 0
                            },
                            {
                                id: 5,
                                question: "Would you like .... milk with your cookies? (some/any)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 6,
                                question: "The students .... received a free copy of the magazine. (each/every)",
                                answer: "each",
                                points: 0
                            },
                            {
                                id: 7,
                                question: "* How about .... grapes? (some/any)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 8,
                                question: "Have you got .... apples? (some/any)",
                                answer: "any",
                                points: 0
                            },
                            {
                                id: 9,
                                question: ".... coffee (A little/Some)",
                                answer: "A little",
                                points: 0
                            },
                            {
                                id: 10,
                                question: "They're open .... day except Sunday. (every/none)",
                                answer: "every",
                                points: 0
                            }
                        ]
                        },
                        { 'name': 'Capitalization' },
                        { 'name': 'Spelling' },
                        { 'name': 'Reading comprehension' },
                        {
                            'name': 'Questions',
                            'questions': [{
                                id: 1,
                                question: "When ... the race begin??",
                                answer: "does",
                                points: 0
                            },
                                {
                                    id: 2,
                                    question: "... you sell fish?",
                                    answer: "Do",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "... plays the trumpet?",
                                    answer: "Who",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "where ... the plane fly to?",
                                    answer: "did",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "... you have a brother?",
                                    answer: "Do",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "... the man know how to drive the car?",
                                    answer: "Does",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "... it time to go home?",
                                    answer: "Is",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "... Mike play volleyball?",
                                    answer: "Does",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "... you fly a plane?",
                                    answer: "Can",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "When ... you attend the festival last year?",
                                    answer: "did",
                                    points: 0
                                }]
                        }
                    ]
                },
                {
                    '_id': 6, 'name': 'A2',
                    'subjects': [
                        { 'name': 'Word order' },
                        {
                          'name': 'Quantifiers',
                          'questions': [
                            {
                                id: 1,
                                question: "How .... bikes were stolen last year? (many/much)",
                                answer: "many",
                                points: 0
                            },
                            {
                                id: 2,
                                question: "How .... coffee do your parents drink per day? (many/much)",
                                answer: "much",
                                points: 0
                            },
                            {
                                id: 3,
                                question: "Don't worry. .... can tell you where the post-office in this town is. (Anyone/Someone)",
                                answer: "Anyone",
                                points: 0
                            },
                            {
                                id: 4,
                                question: "I don't know .... about it. (anything/something)",
                                answer: "anything",
                                points: 0
                            },
                            {
                                id: 5,
                                question: "There are some apples on the table. (some/none)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 6,
                                question: "Pam does not have ..... pencils on her desk. (any/some)",
                                answer: "any",
                                points: 0
                            },
                            {
                                id: 7,
                                question: "He always likes .... piece of chocolate. (a/an)",
                                answer: "a",
                                points: 0
                            },
                            {
                                id: 8,
                                question: "I have ..... homework to do for tomorrow. (some/none)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 9,
                                question: "My teacher asked me .... (something/nothing)",
                                answer: "something",
                                points: 0
                            },
                            {
                                id: 10,
                                question: "Can I have .... to drink? (something/nothing)",
                                answer: "something",
                                points: 0
                            }
                        ]
                        },
                        { 'name': 'Capitalization' },
                        { 'name': 'Spelling' },
                        { 'name': 'Reading comprehension' },
                        {
                            'name': 'Questions',
                            'questions': [{
                                id: 1,
                                question: "(old, how, you, are)?",
                                answer: "How old are you?",
                                points: 0
                            },
                                {
                                    id: 2,
                                    question: "(your, what, is, name)?",
                                    answer: "What is your name?",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "(today, what, day, it, is)?",
                                    answer: "What day is it today?",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "(where, from, you, are)?",
                                    answer: "Where are you from?",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "(time, is, what, it)?",
                                    answer: "What time is it?",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "(what, are, hobbies, your)",
                                    answer: "What are your hobbies?",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "(your, birthday, mom's, when, is)",
                                    answer: "When is your mom's birthday?",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "(your, best, who, is, friend)?",
                                    answer: "Who is your best friend?",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "(Andy, potatoes, like, does)",
                                    answer: "Does Andy like potatoes?",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "(subject, do, you, what, like)?",
                                    answer: "What subject do you like?",
                                    points: 0
                                }]
                        }
                    ]
                }
            ]
        });
        return seederData;
    }
};
