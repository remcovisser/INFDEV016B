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
                    '_id': 1,
                    'name': 'A1',
                    'subjects': [
                        { 'name': 'Word order' },
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
									answer: "brown"
								},
								{
									id: 1,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's wings?",
									answer: "brown"
								},
								{
									id: 3,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's head?",
									answer: "white"
								},
								{
									id: 4,
									question: "The Bald Eagle is a majestic bird. The adult bird has a brown body, brown wings, white head, and large, hooked yellow bill. What color is the Bald Eagle's bill?",
									answer: "yellow"
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
                                    answer: "I walked to the store."
                                },
                                {
                                    id: 2,
                                    question: "I have sleeped ferry well.",
                                    answer: "I have slept very well."
                                },
                                {
                                    id: 3,
                                    question: "Your annoying me quite a byte..",
                                    answer: "You're annoying me quite a bit..."
                                },
                                {
                                    id: 4,
                                    question: "The gras is greener on the otter side",
                                    answer: "The grass is greener on the other side"
                                },
                                {
                                    id: 5,
                                    question: "My mum cooks the tastoest foot",
                                    answer: "My mum cooks the tastiest food"
                                },
                                {
                                    id: 6,
                                    question: "Your keeb amasing me",
                                    answer: "You keep amazing me"
                                },
                                {
                                    id: 7,
                                    question: "The newspaperz are being spred",
                                    answer: "The newspapers are being spread"
                                },
                                {
                                    id: 8,
                                    question: "You're annoioing me quite a bit",
                                    answer: "You're annoying me quite a bit"
                                },
                                {
                                    id: 9,
                                    question: "Water you doing?",
                                    answer: "What are you doing?"
                                },
                                {
                                    id: 10,
                                    question: "You never cheese to amaze me",
                                    answer: "You never cease to amaze me"
                                }
                            ]
                        }
                    ]
                },
                {
                    '_id': 2, 'name': 'A2',
                    'subjects': [
                        { 'name': 'Word order' },
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
                        { 'name': 'Spelling' },
                        {
                            'name': 'Reading comprehension',
                            'questions': 
							[
								{
									id: 1,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my fathers profession?",
									answer: "contruction worker"
								},
								{
									id: 2,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my brothers profession?",
									answer: "brother"
								},
								{
									id: 3,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my sisters profession?",
									answer: "doctor"
								},
								{
									id: 4,
									question: "My father is a construction worker, my brother is an engineer, my sister is a doctor and my mom is a painter. What is my moms profession?",
									answer: "painter"
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
                        { 'name': 'Word order' },
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
									answer: "10"
								},
								{
									id: 2,
									question: "Brown polar bears live on the south pole, eat fish and sleep 13 hours a day. Do brown and white polar bears eat the same food?",
									answer: "yes"
								},
								{
									id: 3,
									question: "Pinguins live on the north pole, eat fish and sleep 10 hours a day. Do pinguins have more in common with white or with brown polar bears?",
									answer: "white"
								},
								{
									id: 4,
									question: "Fish live everywhere, eat sea plants and sleep 9 hours a day. Do fish eat the same food as pinguins?",
									answer: "no"
								},
								{
									id: 5,
									question: "Sea plants are endangered by the things that humans throw into the ocean. If all the sea plants die, does that affect the animals mentioned before?",
									answer: "yes"
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
                        { 'name': 'Word order' },
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
                        { 'name': 'Spelling' },
                        {
                            'name': 'Reading comprehension',
                            'questions': 
							[
								{
									id: 1,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Who was in charge of the home? (man/woman)",
									answer: "woman"
								},
								{
									id: 2,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. What was the task of the man?",
									answer: "providing"
								},
								{
									id: 3,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. What did Sioux men feed their families?",
									answer: "buffalo"
								},
								{
									id: 4,
									question: "In the Sioux culture, men were the providers and women tended to the home and cooked. In fact, in Sioux culture, the home belonged to the woman, and she was in charge of every aspect involved in caring for and maintaining the home. Since there were often more women in a village than men, many Sioux men had several families and killed enough buffalo to feed them all. Where there more men or women in Sioux villages?",
									answer: "women"
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
                        { 'name': 'Word order' },
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
									answer: "carbon dioxide"
								},
								{
									id: 2,
									question: "Mars is also home to Olympus Mons, the highest discovered mountain in the solar system. A person standing on the surface of Mars (in any location in which the mountain was visible) would have no chance of viewing the top. With the peak at 88,600 feet, Olympus Mons is about three times as high as Mount Everest, the highest peak on Earth. What is the name of the largest mountain in the solar system?",
									answer: "Olympus Mons"
								},
								{
									id: 3,
									question: "It takes Mars 687 days to orbit the sun? Is this longer or shorter than earth?",
									answer: "longer"
								},
								{
									id: 4,
									question: "Mars, commonly referred to as the red planet, is the fourth planet from the sun. Its reddish color comes from the high amounts of iron oxide on its surface. The red color of Mars comes from where?",
									answer: "iron oxide"
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
                        { 'name': 'Word order' },
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
                        { 'name': 'Spelling' },
                        {
                            'name': 'Reading comprehension',
                            'questions': 
							[
								{
									id: 1,
									question: "William Henry Gates III (Bill) was born on October 28, 1955, in Seattle, Washington. Bill was the second of three children in an upper-middle class family. He enjoyed playing games with the family and was very competitive. He also loved to read. Bill became bored in public school so his family sent him to Lakeside School, a private school, where he excelled in math and science and did well in drama and English. In what classes did Gates excel?",
									answer: "math and science"
								},
								{
									id: 2,
									question: "Bill Gates is one of the richest men in the world. In 2012, his $61 billion dollars in assets made him the world's second richest man according to Forbes Magazine. In 2006, Gates announced that he would cut back his involvement at Microsoft to spend more time on philanthropy and his foundation. The Bill and Melinda Gates Foundation supports many causes including the quest to eradicate Polio, fighting AIDS, malaria and tuberculosis; providing vaccinations for children; and even reinventing the toilet among many other things. Was Gates the first or second richest man in the world?",
									answer: "second"
								},
								{
									id: 3,
									question: "In recent years, has Bill Gates become more or less involved with Microsoft?",
									answer: "less"
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
                                    question: "This egg tastes eggceptional",
                                    answer: "This egg tastes exceptional"
                                },
                                {
                                    question: "It reely starting to bug me",
                                    answer: "It really starts to bug me"
                                },
                                {
                                    question: "The fish I have caught today are quite scrumtious",
                                    answer: "The fish I have caught today are quite scrumptious"
                                },
                                {
                                    question: "Dora, the fox is right behind that mounten",
                                    answer: "Dora, the fox is right behind that mountain"
                                },
                                {
                                    question: "Jody Bernal should improve his singin, reely",
                                    answer: "Jody Bernal should improve his singing, really"
                                },
                                {
                                    question: "The people who construct these exercise are exceptional programmars and amazing human beans",
                                    answer: "The people who constructed these exercises are exceptional programmers and amazing human beings"
                                },
                                {
                                    question: "My bicep hurt vrom the exercise I did yesterday",
                                    answer: "My biceps hurt from the exercises I did yesterday"
                                },
                                {
                                    question: "My favourite club is Ajax",
                                    answer: "My favourite club is Feyenoord"
                                },
                                {
                                    question: "My favourite club is Sparta Rotterdam",
                                    answer: "My favourite club is Feyenoord"
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
