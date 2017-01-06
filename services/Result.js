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
                        { 'name': 'Quantifiers' },
                        { 'name': 'Capitalization' },
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
                        }
                    ]
                },
                {
                    '_id': 2, 'name': 'A2',
                    'subjects': [
                        { 'name': 'Word order' },
                        { 'name': 'Quantifiers' },
                        { 'name': 'Capitalization' },
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
                        { 'name': 'Quantifiers' },
                        { 'name': 'Capitalization' },
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
                        }
                    ]
                },
                {
                    '_id': 4, 'name': 'B2',
                    'subjects': [
                        { 'name': 'Word order' },
                        { 'name': 'Quantifiers' },
                        { 'name': 'Capitalization' },
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
                        }
                    ]
                },
                {
                    '_id': 5, 'name': 'C1',
                    'subjects': [
                        { 'name': 'Word order' },
                        { 'name': 'Quantifiers' },
                        { 'name': 'Capitalization' },
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
                        }
                    ]
                },
                {
                    '_id': 6, 'name': 'C2',
                    'subjects': [
                        { 'name': 'Word order' },
                        { 'name': 'Quantifiers' },
                        { 'name': 'Capitalization' },
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
                        }
                    ]
                }
            ]
        });
        return seederData;
    }
};
