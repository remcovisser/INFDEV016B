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

    static validateAnswer(correct, given) {
        return correct == given
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
                    '_id': 1,
                    'name': 'A1',
                    'subjects': [
                        {
                            'name': 'Word order',
                            'questions': [
                                {
                                    id: 1,
                                    question: "walk to my home I",
                                    answer: "I walk to my home",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "you do have money?",
                                    answer: "do you have money?",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "much how money does it cost?",
                                    answer: "how much money does it cost",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "he the fire put out",
                                    answer: "he put out the fire",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "a car he drives today",
                                    answer: "he drives a car today",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "bee watch out for sothe",
                                    answer: "watch out for the bee",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "dangerous drinking is",
                                    answer: "drinking is dangerous",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "the hole beware of",
                                    answer: "beware of the hole",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "to school Peter walks",
                                    answer: "Peter walks to school",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "pay for food he does?",
                                    answer: "does he pay for food?",
                                    points: 0
                                }
                            ]
                        },
                        {
                            'name': 'Capitalization',
                            'questions': [
                                {
                                    id: 1,
                                    question: "We saw the Brooklyn ... (bridge)",
                                    answer: "Bridge",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "We're going to Germany in ... (june)",
                                    answer: "June",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "We spent our holidays in the Dominican ... (republic)",
                                    answer: "Republic",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "One of the courses that I have to take next year is \"... 3\" (math)",
                                    answer: "Math",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "I'm starting my job in ... (may)",
                                    answer: "May",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "We often go to the beach in the ... (summer)",
                                    answer: "summer",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "I love learning ... (french)",
                                    answer: "French",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "The ... man was cooking dinner (jamaican)",
                                    answer: "Jamaican",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "I'm pretty bad at ... (math)",
                                    answer: "math",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "I saw ... Brown in the lobby (senator)",
                                    answer: "Senator",
                                    points: 0
                                }
                            ]
                        },
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
                        { 'name': 'Spelling' },
                        {
                            'name': 'Reading comprehension',
                            'questions':
							[
								{
									id: 1,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's body?",
									answer: "brown",
                                    points: 0
								},
								{
									id: 2,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's wings?",
									answer: "brown",
                                    points: 0
								},
								{
									id: 3,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's head?",
									answer: "white",
                                    points: 0
								},
								{
									id: 4,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's bill?",
									answer: "yellow",
                                    points: 0
								},
								{
									id: 5,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's bill?",
									answer: "yellow",
                                    points: 0
								},
								{
									id: 6,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's bill?",
									answer: "yellow",
                                    points: 0
								},
								{
									id: 7,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's bill?",
									answer: "yellow",
                                    points: 0
								},
								{
									id: 8,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's bill?",
									answer: "yellow",
                                    points: 0
								},
								{
									id: 9,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's bill?",
									answer: "yellow",
                                    points: 0
								},
								{
									id: 10,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's bill?",
									answer: "yellow",
                                    points: 0
								}
							]
                        },
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
                        },
                        {
                            name: "Spelling",
                            questions: [
                                {
                                    id: 1,
                                    question: "I walket to the stor.",
                                    answer: "I walked to the store.",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "I have sleeped ferry well.",
                                    answer: "I have slept very well.",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "Your annoying me quite a byte..",
                                    answer: "You're annoying me quite a bit...",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "The gras is greener on the otter side",
                                    answer: "The grass is greener on the other side",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "My mum cooks the tastoest foot",
                                    answer: "My mum cooks the tastiest food",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "Your keeb amasing me",
                                    answer: "You keep amazing me",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "The newspaperz are being spred",
                                    answer: "The newspapers are being spread",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "You're annoioing me quite a bit",
                                    answer: "You're annoying me quite a bit",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "Water you doing?",
                                    answer: "What are you doing?",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "You never cheese to amaze me",
                                    answer: "You never cease to amaze me",
                                    points: 0
                                }
                            ]
                        }
                    ]
                },
                {
                    '_id': 2, 'name': 'A2',
                    'subjects': [
                        { 
                            name: "Word order",
                            questions: [
                                {
                                    id: 1,
                                    question: "our holiday will at home we not spend next year",
                                    answer: "we will not spend our holiday at home next year",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "did I him see not last night at the disco",
                                    answer: "I did not see him at the disco last night",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "to a party not we tonight going are",
                                    answer:"we are not going to a party tonight",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "will a letter not next week send you she",
                                    answer:"she will not send you a letter next week.",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "not the truth did he tell you",
                                    answer:"he did not tell you the truth",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "to the cinema we want not do tonight to go",
                                    answer:"we do not want to go to the cinema tonight",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "play in the bar did he last week not the piano",
                                    answer:"he did not play the piano in the bar last week",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "not now she in England is",
                                    answer:"she is not in England now",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "eat in winter ice-cream do not I",
                                    answer:"I do not eat ice-cream in winter",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "right now have not we time do",
                                    answer:"we do not have time right now",
                                    points: 0
                                }
                            ] 
                        },
                        {
                            'name': 'Capitalization',
                            'questions': [
                                {
                                    id: 1,
                                    question: "I love learning ... (english)",
                                    answer: "English"
                                },
                                {
                                    id: 2,
                                    question: "We saw the Brooklyn ... (bridge)",
                                    answer: "Bridge"
                                },
                                {
                                    id: 3,
                                    question: "We're going to Germany in ... (june)",
                                    answer: "June"
                                },
                                {
                                    id: 4,
                                    question: "We spent our holidays in the Dominican ... (republic)",
                                    answer: "Republic"
                                },
                                {
                                    id: 5,
                                    question: "One of the courses that I have to take next year is \"... 3\" (math)",
                                    answer: "Math"
                                },
                                {
                                    id: 6,
                                    question: "I'm starting my job in ... (may)",
                                    answer: "May"
                                },
                                {
                                    id: 7,
                                    question: "We often go to the beach in the ... (summer)",
                                    answer: "summer"
                                },
                                {
                                    id: 8,
                                    question: "The ... man was cooking dinner (jamaican)",
                                    answer: "Jamaican"
                                },
                                {
                                    id: 9,
                                    question: "I'm pretty bad at ... (math)",
                                    answer: "math"
                                },
                                {
                                    id: 10,
                                    question: "I saw ... Brown in the lobby (senator)",
                                    answer: "Senator"
                                }
                            ]
                        },
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
                        {
                            name: "Spelling",
                            questions: [
                                {
                                    id: 1,
                                    question: "He slepped me",
                                    answer: "He slapped me",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "It ated my foot",
                                    answer: "It ate my food",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "The footballpleyer waz injured",
                                    answer: "The footballplayer was injured",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "The oter ate a vish",
                                    answer: "The otter ate a fish",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "My dad steped on a Lego",
                                    answer: "My dad stepped on a Lego",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "This food tastes amasing",
                                    answer: "This food tastes amazing",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "The newspapers where not deliverd",
                                    answer: "The newspapers were not delivered",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "The lion chaset the dear",
                                    answer: "The lion chased the deer",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "It is a nice dey",
                                    answer: "It is a nice day",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "Andy plays Pokemon Go",
                                    answer: "Andry plays Pokemon Go",
                                    points: 0
                                }
                            ]
                        },
                        {
                            'name': 'Reading comprehension',
                            'questions':
							[
								{
									id: 1,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my fathers profession?",
									answer: "contruction worker",
                                    points: 0
								},
								{
									id: 2,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my brothers profession?",
									answer: "brother",
                                    points: 0
								},
								{
									id: 3,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my sisters profession?",
									answer: "doctor",
                                    points: 0
								},
								{
									id: 4,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my moms profession?",
									answer: "painter",
                                    points: 0
								},
								{
									id: 5,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my moms profession?",
									answer: "painter",
                                    points: 0
								},
								{
									id: 6,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my moms profession?",
									answer: "painter",
                                    points: 0
								},
								{
									id: 7,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my moms profession?",
									answer: "painter",
                                    points: 0
								},
								{
									id: 8,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my moms profession?",
									answer: "painter",
                                    points: 0
								},
								{
									id: 9,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my moms profession?",
									answer: "painter",
                                    points: 0
								},
								{
									id: 10,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my moms profession?",
									answer: "painter",
                                    points: 0
								}
							]
                        },
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
                        {   
                            name: "Word order",
                            questions: [
                                {
                                    id: 1,
                                    question: "She is in great form because (every week / goes / she / to the gym)",
                                    answer: "she goes to the gym every week",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "I think (likes / Susan / you)",
                                    answer: "Susan likes you",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "I can't talk to you because (time / do not have / I / now)",
                                    answer: "I do not have time now",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "We are glad that (at home / did not leave / we / our umbrella ",
                                    answer: "we did not leave our umbrella at home",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "I will miss him when (to Chicago / moves / he) ",
                                    answer: "he moves to Chicago",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "They don't know where (have left / the key / they)",
                                    answer: "they have left the key",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "Ring me if (have / you / a problem)",
                                    answer: "you have a problem",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "I'd like to know why (her holiday / does not spend / she / in France)",
                                    answer: "she does not spend her holiday in France",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "They told him that (wanted to play / they / tennis)",
                                    answer: "they wanted to play tennis",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "He was reading the paper while (she / in the garden / was working)",
                                    answer: "she was working in the garden",
                                    points: 0
                                }
                            ] 
                        },
                        {
                            'name': 'Capitalization',
                            'questions': [
                                {
                                    id: 1,
                                    question: "We're going to Germany in ... (june)",
                                    answer: "June",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "I love learning ... (english)",
                                    answer: "English",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "We saw the Brooklyn ... (bridge)",
                                    answer: "Bridge",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "We spent our holidays in the Dominican ... (republic)",
                                    answer: "Republic",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "One of the courses that I have to take next year is \"... 3\" (math)",
                                    answer: "Math",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "I'm starting my job in ... (may)",
                                    answer: "May",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "We often go to the beach in the ... (summer)",
                                    answer: "summer",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "The ... man was cooking dinner (jamaican)",
                                    answer: "Jamaican",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "I'm pretty bad at ... (math)",
                                    answer: "math",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "I saw ... Brown in the lobby (senator)",
                                    answer: "Senator",
                                    points: 0
                                }
                            ]
                        },
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
                        { 'name': 'Spelling' },
                        {
                            'name': 'Reading comprehension',
                            'questions':
							[
								{
									id: 1,
									question: "White polar bears live on the north pole, eat fish and sleep 14 hours a day. How many hours a day are white polar bears active?",
									answer: "10",
                                    points: 0
								},
								{
									id: 2,
									question: "Brown polar bears live on the south pole, eat fish and sleep 13 hours a day. Do brown and white polar bears eat the same food?",
									answer: "yes",
                                    points: 0
								},
								{
									id: 3,
									question: "Pinguins live on the north pole, eat fish and sleep 10 hours a day. Do pinguins have more in common with white or with brown polar bears?",
									answer: "white",
                                    points: 0
								},
								{
									id: 4,
									question: "Fish live everywhere, eat sea plants and sleep 9 hours a day. Do fish eat the same food as pinguins?",
									answer: "no",
                                    points: 0
								},
								{
									id: 5,
									question: "Sea plants are endangered by the things that humans throw into the ocean. If all the sea plants die, does that affect the animals mentioned before?",
									answer: "yes",
                                    points: 0
								},
								{
									id: 6,
									question: "Sea plants are endangered by the things that humans throw into the ocean. If all the sea plants die, does that affect the animals mentioned before?",
									answer: "yes",
                                    points: 0
								},
								{
									id: 7,
									question: "Sea plants are endangered by the things that humans throw into the ocean. If all the sea plants die, does that affect the animals mentioned before?",
									answer: "yes",
                                    points: 0
								},
								{
									id: 8,
									question: "Sea plants are endangered by the things that humans throw into the ocean. If all the sea plants die, does that affect the animals mentioned before?",
									answer: "yes",
                                    points: 0
								},
								{
									id: 9,
									question: "Sea plants are endangered by the things that humans throw into the ocean. If all the sea plants die, does that affect the animals mentioned before?",
									answer: "yes",
                                    points: 0
								},
								{
									id: 10,
									question: "Sea plants are endangered by the things that humans throw into the ocean. If all the sea plants die, does that affect the animals mentioned before?",
									answer: "yes",
                                    points: 0
								}
							]
                        },
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
                        },
                        {
                            name: "Spelling",
                            questions: [
                                {
                                    id: 1,
                                    question: "He slepped me",
                                    answer: "He slapped me"
                                },
                                {
                                    id: 2,
                                    question: "It ated my foot",
                                    answer: "It ate my food"
                                },
                                {
                                    id: 3,
                                    question: "The footballpleyer waz injured",
                                    answer: "The footballplayer was injured"
                                },
                                {
                                    id: 4,
                                    question: "The oter ate a vish",
                                    answer: "The otter ate a fish"
                                },
                                {
                                    id: 5,
                                    question: "My dad steped on a Lego",
                                    answer: "My dad stepped on a Lego"
                                },
                                {
                                    id: 6,
                                    question: "This food tastes amasing",
                                    answer: "This food tastes amazing"
                                },
                                {
                                    id: 7,
                                    question: "The newspapers where not deliverd",
                                    answer: "The newspapers were not delivered"
                                },
                                {
                                    id: 8,
                                    question: "The lion chaset the dear",
                                    answer: "The lion chased the deer"
                                },
                                {
                                    id: 9,
                                    question: "It is a nice dey",
                                    answer: "It is a nice day"
                                },
                                {
                                    id: 10,
                                    question: "Dilan plays Pokemon Go",
                                    answer: "Dylan plays Pokemon Go"
                                }
                            ]
                        }
                    ]
                },
                {
                    '_id': 4, 'name': 'B2',
                    'subjects': [
                        { 
                            name: "Word order",
                            questions: [
                                {
                                    id: 1,
                                    question: "go now home will I ",
                                    answer: "I will go home now",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "give the present tomorrow we him will",
                                    answer: "we will give him the present tomorrow",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "her met last night at we the station",
                                    answer: "we met her at the station last night",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "was last week he in hospital",
                                    answer: "he was in hospital last week",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "in Greece spend I will next year my holiday",
                                    answer: "I will spend my holiday in Greece next year",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "must at five o'clock leave we the house",
                                    answer: "we must leave the house at five o'clock",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "the library take I the book will today to",
                                    answer: "I will take the book to the library today",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "my mum breakfast in the morning made",
                                    answer: "my mum made breakfast in the morning",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "tonight want to the cinema to go we",
                                    answer: "we want to go to the cinema tonight",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "wrote last week they at school a test",
                                    answer: "they wrote a test at school last week",
                                    points: 0
                                }
                            ] 
                        },
                        {
                            'name': 'Capitalization',
                            'questions': [
                                {
                                    id: 1,
                                    question: "I'm starting my job in ... (may)",
                                    answer: "May",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "We're going to Germany in ... (june)",
                                    answer: "June",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "I love learning ... (english)",
                                    answer: "English",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "We saw the Brooklyn ... (bridge)",
                                    answer: "Bridge",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "We spent our holidays in the Dominican ... (republic)",
                                    answer: "Republic",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "One of the courses that I have to take next year is \"... 3\" (math)",
                                    answer: "Math",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "We often go to the beach in the ... (summer)",
                                    answer: "summer",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "The ... man was cooking dinner (jamaican)",
                                    answer: "Jamaican",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "I'm pretty bad at ... (math)",
                                    answer: "math",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "I saw ... Brown in the lobby (senator)",
                                    answer: "Senator",
                                    points: 0
                                }
                            ]
                        },
                        {
                          'name': 'Quantifiers',
                          'questions': [
                            {
                                id: 1,
                                question: "We haven't heard .... about Peter. Is he ill? (anything/something)",
                                answer: "anything",
                                points: 0
                            },
                            {
                                id: 2,
                                question: "Do you live .... near Mandy? (anywhere/somewhere)",
                                answer: "anywhere",
                                points: 0
                            },
                            {
                                id: 3,
                                question: "Peter has bought .... new books. (some/none)",
                                answer: "some",
                                points: 0
                            },
                            {
                                id: 4,
                                question: "She always takes .... sugar with her coffee. (some/any)",
                                answer: "some",
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
                                question: "Look! He's having .... sandwiches. (some/ever)",
                                answer: "some",
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
                                question: "He always likes .... piece of chocolate. (a/an)",
                                answer: "a",
                                points: 0
                            },
                            {
                                id: 9,
                                question: ".... little money (A/An)",
                                answer: "A",
                                points: 0
                            },
                            {
                                id: 10,
                                question: ".... children (A few/A little)",
                                answer: "A few",
                                points: 0
                            }
                        ]
                        },
                        { 'name': 'Spelling' },
                        {
                            'name': 'Reading comprehension',
                            'questions':
							[
								{
									id: 1,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Who was in charge of the home? (man/woman)",
									answer: "woman",
                                    points: 0
								},
								{
									id: 2,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. What was the task of the man?",
									answer: "providing",
                                    points: 0
								},
								{
									id: 3,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. What did Sioux men feed their families?",
									answer: "buffalo",
                                    points: 0
								},
								{
									id: 4,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Where there more men or women in Sioux villages?",
									answer: "women",
                                    points: 0
								},
								{
									id: 5,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Where there more men or women in Sioux villages?",
									answer: "women",
                                    points: 0
								},
								{
									id: 6,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Where there more men or women in Sioux villages?",
									answer: "women",
                                    points: 0
								},
								{
									id: 7,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Where there more men or women in Sioux villages?",
									answer: "women",
                                    points: 0
								},
								{
									id: 8,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Where there more men or women in Sioux villages?",
									answer: "women",
                                    points: 0
								},
								{
									id: 9,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Where there more men or women in Sioux villages?",
									answer: "women",
                                    points: 0
								},
								{
									id: 10,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Where there more men or women in Sioux villages?",
									answer: "women",
                                    points: 0
								}
							]
                        },
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
                        },
                        {
                            name: "Spelling",
                            questions: [
                                {
                                    id: 1,
                                    question: "Reffer to me as Tom",
                                    answer: "Refer to me as Tom"
                                },
                                {
                                    id: 2,
                                    question: "The animal was heartbroken efter the love of hiz live left him for an poodle",
                                    answer: "The animal was heartbroken after the love of his life left him for a poodle"
                                },
                                {
                                    id: 3,
                                    question: "This is quite an tricky question",
                                    answer: "This is quite a tricky question"
                                },
                                {
                                    id: 4,
                                    question: "It ccured to him that he wass in need of a byt of sleep",
                                    answer: "It occurred to him that we was in need of a bit of sleep"
                                },
                                {
                                    id: 5,
                                    question: "He did not do the dashes",
                                    answer: "He did not do the dishes"
                                },
                                {
                                    id: 6,
                                    question: "Englishman are quite exceptional at the art of speeking English fluently",
                                    answer: "Englishmen are quite exceptional at the art of speaking English fluently"
                                },
                                {
                                    id: 7,
                                    question: "The lattest news always apears at a instance on their website",
                                    answer: "The latest news always appears at an instance on their website"
                                },
                                {
                                    id: 8,
                                    question: "He drank to much wiskey",
                                    answer: "He drunk too much whiskey"
                                },
                                {
                                    id: 9,
                                    question: "Later that day, he had a sudden realization that the love of his life appared to be his bottle of rum",
                                    answer: "Later that day, he had a sudden realization that the love of his life appeared to be his bottle of rum"
                                },
                                {
                                    id: 10,
                                    question: "Andy is rother annooiing, today",
                                    answer: "Andy is rather annoying, today"
                                }
                            ]
                        }
                    ]
                },
                {
                    '_id': 5, 'name': 'C1',
                    'subjects': [
                        { 
                            name: "Word order",
                            questions: [
                                {
                                    id: 1,
                                    question: "We were in London (last week) <Reorder sentence to fit adverb>",
                                    answer: "We were in London last week",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "He walks his dog (rarely) <Reorder sentence to fit adverb>",
                                    answer: "He rarely walks his dog",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "She waited (patiently)  <Reorder sentence to fit adverb>",
                                    answer: "She waited patiently",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "My father goes fishing (always) <Reorder sentence to fit adverb>",
                                    answer: "My father always goes fishing",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "Your bedroom is (upstairs)  <Reorder sentence to fit adverb>",
                                    answer: "Your bedroom is upstairs",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "We don't go skiing (in summer)  <Reorder sentence to fit adverb>",
                                    answer: "We don't go skiing in summer",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "Cats can hear. (well)  <Reorder sentence to fit adverb>",
                                    answer: "Cats can hear well",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "I saw him. (there)  <Reorder sentence to fit adverb>",
                                    answer: "I saw him there",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "The girl speaks English. (fluently)  <Reorder sentence to fit adverb>",
                                    answer: "The girl speaks English fluently",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "I have seen that film. (never) / (before) <Reorder sentence to fit adverb>",
                                    answer: "I have never seen that film before",
                                    points: 0
                                }
                            ]
                        },
                        {
                            'name': 'Capitalization',
                            'questions': [
                                {
                                    id: 1,
                                    question: "We often go to the beach in the ... (summer)",
                                    answer: "summer",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "I'm starting my job in ... (may)",
                                    answer: "May",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "We're going to Germany in ... (june)",
                                    answer: "June",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "I love learning ... (english)",
                                    answer: "English",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "We saw the Brooklyn ... (bridge)",
                                    answer: "Bridge",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "We spent our holidays in the Dominican ... (republic)",
                                    answer: "Republic",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "One of the courses that I have to take next year is \"... 3\" (math)",
                                    answer: "Math",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "The ... man was cooking dinner (jamaican)",
                                    answer: "Jamaican",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "I'm pretty bad at ... (math)",
                                    answer: "math",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "I saw ... Brown in the lobby (senator)",
                                    answer: "Senator"
                                }
                            ]
                        },
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
                        { 'name': 'Spelling' },
                        {
                            'name': 'Reading comprehension',
                            'questions':
							[
								{
									id: 1,
									question: "Mars has an extremely thin atmosphere. 95% of it is carbon dioxide, 3% is nitrogen, 1.6% is argon, and the remainder consists of traces of oxygen and water. The atmosphere of Mars is dominated by?",
									answer: "carbon dioxide",
                                    points: 0
								},
								{
									id: 2,
									question: "Mars is also home to Olympus Mons, the highest discovered mountain in the solar system. A person standing on the surface of Mars (in any location in which the mountain was visible) would have no chance of viewing the top. With the peak at 88,600 feet, Olympus Mons is about three times as high as Mount Everest, the highest peak on Earth. What is the name of the largest mountain in the solar system?",
									answer: "Olympus Mons",
                                    points: 0
								},
								{
									id: 3,
									question: "It takes Mars 687 days to orbit the sun? Is this longer or shorter than earth?",
									answer: "longer",
                                    points: 0
								},
								{
									id: 4,
									question: "Mars, commonly referred to as the red planet, is the fourth planet from the sun. Its reddish color comes from the high amounts of iron oxide on its surface. The red color of Mars comes from where?",
									answer: "iron oxide",
                                    points: 0
								},
								{
									id: 5,
									question: "Mars, commonly referred to as the red planet, is the fourth planet from the sun. Its reddish color comes from the high amounts of iron oxide on its surface. The red color of Mars comes from where?",
									answer: "iron oxide",
                                    points: 0
								},
								{
									id: 6,
									question: "Mars, commonly referred to as the red planet, is the fourth planet from the sun. Its reddish color comes from the high amounts of iron oxide on its surface. The red color of Mars comes from where?",
									answer: "iron oxide",
                                    points: 0
								},
								{
									id: 7,
									question: "Mars, commonly referred to as the red planet, is the fourth planet from the sun. Its reddish color comes from the high amounts of iron oxide on its surface. The red color of Mars comes from where?",
									answer: "iron oxide",
                                    points: 0
								},
								{
									id: 8,
									question: "Mars, commonly referred to as the red planet, is the fourth planet from the sun. Its reddish color comes from the high amounts of iron oxide on its surface. The red color of Mars comes from where?",
									answer: "iron oxide",
                                    points: 0
								},
								{
									id: 9,
									question: "Mars, commonly referred to as the red planet, is the fourth planet from the sun. Its reddish color comes from the high amounts of iron oxide on its surface. The red color of Mars comes from where?",
									answer: "iron oxide",
                                    points: 0
								},
								{
									id: 10,
									question: "Mars, commonly referred to as the red planet, is the fourth planet from the sun. Its reddish color comes from the high amounts of iron oxide on its surface. The red color of Mars comes from where?",
									answer: "iron oxide",
                                    points: 0
								}
							]
                        },
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
                        },
                        {
                            name: "Spelling",
                            questions: [
                                {
                                    question: "Remco, unfortutanely, does not life in Rotterdam",
                                    answer: "Remco, unfortunately, does not live in Rotterdam"
                                },
                                {
                                    question: "Remco is a ferry vunny guy",
                                    answer: "Remco is a very funny guy"
                                },
                                {
                                    question: "The boot seels akros the sea",
                                    answer: "The boat sails across the sea"
                                },
                                {
                                    question: "The script will only be exekuted whenever Remcodedko wants it to",
                                    answer: "The script will only be executed whenever Remco wants it to"
                                },
                                {
                                    question: "Remco has found the missing PDF he wanted to lent Andy",
                                    answer: "Remco has found the missing PDF he wanted to lend Andy"
                                },
                                {
                                    question: "Saldy, Remco is not Jody Bernal",
                                    answer: "Sadly, Remco is not Jody Bernal"
                                },
                                {
                                    question: "Remco's programming skills are extraordinarily diversived",
                                    answer: "Remco's programming skills are extraordinarily diversive"
                                },
                                {
                                    question: "Remco has bought an license for Visual Studio 2009",
                                    answer: "Remco has bought a license for Visual Studio 2009"
                                },
                                {
                                    question: "Remco, supposedly, does not like wiating on his food and bear",
                                    answer: "Remco, supposedly, does not like waiting on his food and beer"
                                },
                                {
                                    question: "Remco likes to exercise quite a bit, as you can sea. Look at those bikeps.",
                                    answer: "Remco likes to exercise quite a bit, as you can see. Look at those biceps."
                                }
                            ]
                        }
                    ]
                },
                {
                    '_id': 6, 'name': 'C2',
                    'subjects': [
                        { 
                            name: "Word order",
                            questions: [
                                {
                                    id: 1,
                                    question: "We went to the cinema yesterday. OR We went yesterday to the cinema.",
                                    answer: "We went to the cinema yesterday.",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "We often go to the cinema. OR We go often to the cinema.",
                                    answer: "We often go to the cinema.",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "Next Tuesday I will go to the cinema. OR I will go to the cinema next Tuesday.",
                                    answer: "Next Tuesday I will go to the cinema.",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "They never go to the cinema. OR They go to the cinema never.",
                                    answer:  "They never go to the cinema",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "She goes every Sunday to the cinema. OR She goes to the cinema every Sunday.",
                                    answer: "She goes to the cinema every Sunday.",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "I seldom am at the cinema. OR I am seldom at the cinema.",
                                    answer: "I am seldom at the cinema.",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "I don't go to the cinema every week. OR I don't go every week to the cinema.",
                                    answer: "I don't go to the cinema every week.",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "Francis does not always go to the cinema. OR Francis does not go to the cinema always.",
                                    answer: "Francis does not always go to the cinema.",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "Do frequently you go to the cinema? OR Do you frequently go to the cinema?",
                                    answer: "Do you frequently go to the cinema?",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "My friends didn't go to the cinema on Friday. OR On Friday my friends didn't go to the cinema.",
                                    answer: "My friends didn't go to the cinema on Friday.",
                                    points: 0
                                },
                            ]
                        },
                        {
                            'name': 'Capitalization',
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
						{
                            'name': 'Reading comprehension',
                            'questions':
							[
								{
									id: 1,
									question: "William Henry Gates III (Bill) was born on October 28, 1955, in Seattle, Washington. Bill was the second of three children in an upper-middle class family. He enjoyed playing games with the family and was very competitive. He also loved to read. Bill became bored in public school so his family sent him to Lakeside School, a private school, where he excelled in math and science and did well in drama and English. In what classes did Gates excel?",
									answer: "math and science",
                                    points: 0
								},
								{
									id: 2,
									question: "Bill Gates is one of the richest men in the world. In 2012, his $61 billion dollars in assets made him the world's second richest man according to Forbes Magazine. In 2006, Gates announced that he would cut back his involvement at Microsoft to spend more time on philanthropy and his foundation. The Bill and Melinda Gates Foundation supports many causes including the quest to eradicate Polio, fighting AIDS, malaria and tuberculosis; providing vaccinations for children; and even reinventing the toilet among many other things. Was Gates the first or second richest man in the world?",
									answer: "second",
                                    points: 0
								},
								{
									id: 3,
									question: "In recent years, has Bill Gates become more or less involved with Microsoft?",
									answer: "less",
                                    points: 0
								},
								{
									id: 4,
									question: "In recent years, has Bill Gates become more or less involved with Microsoft?",
									answer: "less",
                                    points: 0
								},
								{
									id: 5,
									question: "In recent years, has Bill Gates become more or less involved with Microsoft?",
									answer: "less",
                                    points: 0
								},
								{
									id: 6,
									question: "In recent years, has Bill Gates become more or less involved with Microsoft?",
									answer: "less",
                                    points: 0
								},
								{
									id: 7,
									question: "In recent years, has Bill Gates become more or less involved with Microsoft?",
									answer: "less",
                                    points: 0
								},
								{
									id: 8,
									question: "In recent years, has Bill Gates become more or less involved with Microsoft?",
									answer: "less",
                                    points: 0
								},
								{
									id: 9,
									question: "In recent years, has Bill Gates become more or less involved with Microsoft?",
									answer: "less",
                                    points: 0
								},
								{
									id: 10,
									question: "In recent years, has Bill Gates become more or less involved with Microsoft?",
									answer: "less",
                                    points: 0
								}
							]
                        },
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
                        },
                        {
                            name: "Spelling",
                            questions: [
                                {
                                    id: 1,
                                    question: "How much wood wood a wouldchuck chuck if a wouldchuck could chuck would?",
                                    answer: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
                                    points: 0
                                },
                                {
                                    id: 2,
                                    question: "They love eachother deerly",
                                    answer: "They love each other dearly",
                                    points: 0
                                },
                                {
                                    id: 3,
                                    question: "This is the sea, as you can sea",
                                    answer: "This is the sea, as you can see",
                                    points: 0
                                },
                                {
                                    id: 4,
                                    question: "The tiger rooms freely within the borders of these forest",
                                    answer: "The tiger roams freely within the borders of these forests",
                                    points: 0
                                },
                                {
                                    id: 5,
                                    question: "I wanted to eat a few loaves of brood",
                                    answer: "I wanted to eat a few loaves of bread",
                                    points: 0
                                },
                                {
                                    id: 6,
                                    question: "My new phoon just came in",
                                    answer: "My new phone just came in",
                                    points: 0
                                },
                                {
                                    id: 7,
                                    question: "This subject is extremly hard",
                                    answer: "This subject is extremely hard",
                                    points: 0
                                },
                                {
                                    id: 8,
                                    question: "My new neibor is quite friendly",
                                    answer: "My new neighbour is quite friendly",
                                    points: 0
                                },
                                {
                                    id: 9,
                                    question: "Remco is a programin genius",
                                    answer: "Remco is a programming genius",
                                    points: 0
                                },
                                {
                                    id: 10,
                                    question: "Remco's work is always need",
                                    answer: "Remco's work ia always neat",
                                    points: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        return seederData;
    }
};
