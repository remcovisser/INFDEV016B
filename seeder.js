require('mongodb').MongoClient.connect('mongodb://localhost:27017/EnglishPractise', function(err, db) {
    if (err) {
        console.error('Unable to connect to MongDB:');
        throw new Error(err);
    }

    // Clear old collections
    db.collection('exercises').drop();
    db.collection('users').drop();

    // Insert exercises
    db.collection('exercises').insertMany([
        {
            name: 'C2',
            description: 'This is the most basic  english.',
            subjects: [
                {
                    name: "Word order",
                    questions: [
                        {
                            question: "Rick, succes.",
                            answer: "NotLikeThis"
                        },
                        {
                            question: "What time is it?",
                            answer: "High noon"
                        }
                    ]
                },
                {
                    name: "Quantifiers",
                    questions: [
                        {
                            question: "How .... money have you got? (much/many)",
                            answer: "much"
                        },
                        {
                            question: "He has .... money left. (a little/a few)",
                            answer: "a little"
                        },
                        {
                            question: ".... time (much/many)",
                            answer: "much"
                        },
                        {
                            question: ".... children (much/many)",
                            answer: "many"
                        },
                        {
                            question: "There are two boys. .... is smiling. (each/every)",
                            answer: "each"
                        },
                        {
                            question: "The students .... received a free copy of the magazine. (each/every)",
                            answer: "each"
                        },
                        {
                            question: "Can I have .... of these apples? (some/any)",
                            answer: "some"
                        },
                        {
                            question: "Have you got .... apples? (some/any)",
                            answer: "any"
                        },
                        {
                            question: "There is .... wrong with our car. (something/anything)",
                            answer: "something"
                        },
                        {
                            question: "She looked ill, ..... . (somehow/anyhow/someway/anyway)",
                            answer: "somehow"
                        }
                    ]
                },
                {
                    name: "Capitalization",
                    questions: [
                        {
                            question: "Lorem, succes.",
                            answer: "Ipsum"
                        },
                        {
                            question: "What time is it?",
                            answer: "High noon"
                        }
                    ]
                },
                {
                    name: "Spelling",
                    questions: [
                        {
                            question: "Rick, succes.",
                            answer: "NotLikeThis"
                        },
                        {
                            question: "What time is it?",
                            answer: "High noon"
                        }
                    ]
                },
                {
                    name: "Reading comprehension",
                    questions: [
                        {
                            question: "Rick, succes.",
                            answer: "NotLikeThis"
                        },
                        {
                            question: "What time is it?",
                            answer: "High noon"
                        }
                    ]
                },
                {
                    name: "Questions",
                    questions: [
                        {
                            question: "When are you leaving (yesterday / in 9 o'clock / at 9 o'clock)?",
                            answer: "At 9 o'clock"
                        },
                        {
                            question: "Where are you going? (by train, to France, in 9 minutes)",
                            answer: "to France"
                        },
                        {
                            question: "How will you go there? (tomorrow / by plane / in 6 minutes)",
                            answer: "by plane"
                        },
                        {
                            question: "Why are you going? (by plane, because it's his birthday, im bored)",
                            answer: "because it's his birthday"
                        },
                        {
                            question: "Who is joining you? (Peter, someone, I'm going)",
                            answer: "Peter"
                        },
                        {
                            question: "Whose suitcase is that? (Johnny's, my dog's, hers)",
                            answer: "Johnny's"
                        },
                        {
                            question: "What book will you read? (That book, in 9 minutes, a manga)",
                            answer: "That book"
                        },
                        {
                            question: "What language are you studying? (France, Greece, Japanese)",
                            answer: "Japanese"
                        },
                        {
                            question: "What is your dog's name? (You are my dog, Woof, Dad)",
                            answer: "Woof"
                        },
                        {
                            question: "On what date was your dog born? (a few days ago, 20 minutes from now on, January 1st)",
                            answer: "January 1st"
                        }
                    ]
                }
            ]
        },
        {
            name: 'C1',
            description: 'This is a beginner  english.',
            subjects: [
                {
                    name: "Word order",
                    questions: []
                },
                {
                    name: "Quantifiers",
                    questions: [
                        {
                            question: "We need .... bananas. (some/any)",
                            answer: "some"
                        },
                        {
                            question: "You can't buy .... posters in this shop. (some/any)",
                            answer: "any"
                        },
                        {
                            question: "They have found .... gold in that old mine. (some/any)",
                            answer: "some"
                        },
                        {
                            question: "Do the Smiths have .... yellow van? (a/an)",
                            answer: "a"
                        },
                        {
                            question: ".... little cheese (A/An)",
                            answer: "A"
                        },
                        {
                            question: ".... few cars (A/An)",
                            answer: "A"
                        },
                        {
                            question: "There are four worksheets - please take one of each. (each/every)",
                            answer: "each"
                        },
                        {
                            answer: "every"
                        },
                        {
                            question: "How .... time is left?) (much/many)",
                            answer: "much"
                        },
                        {
                            question: "How .... sisters does Ella have? (much/many)",
                            answer: "many"
                        },
                    ]
                },
                {
                    name: "Capitalization",
                    questions: []
                },
                {
                    name: "Spelling",
                    questions: []
                },
                {
                    name: "Reading comprehension",
                    questions: []
                },
                {
                    name: "Questions",
                    questions: []
                },
            ]
        },
        {
            name: 'B2',
            description: '...',
            subjects: [
                {
                    name: "Word order",
                    questions: []
                },
                {
                    name: "Quantifiers",
                    questions: []
                },
                {
                    name: "Capitalization",
                    questions: []
                },
                {
                    name: "Spelling",
                    questions: []
                },
                {
                    name: "Reading comprehension",
                    questions: []
                },
                {
                    name: "Questions",
                    questions: []
                },
            ]
        },
        {
            name: 'B1',
            description: '....',
            subjects: [
                {
                    name: "Word order",
                    questions: []
                },
                {
                    name: "Quantifiers",
                    questions: []
                },
                {
                    name: "Capitalization",
                    questions: []
                },
                {
                    name: "Spelling",
                    questions: []
                },
                {
                    name: "Reading comprehension",
                    questions: []
                },
                {
                    name: "Questions",
                    questions: []
                },
            ]
        },
        {
            name: 'A2',
            description: '....',
            subjects: [
                {
                    name: "Word order",
                    questions: []
                },
                {
                    name: "Quantifiers",
                    questions: []
                },
                {
                    name: "Capitalization",
                    questions: []
                },
                {
                    name: "Spelling",
                    questions: []
                },
                {
                    name: "Reading comprehension",
                    questions: []
                },
                {
                    name: "Questions",
                    questions: []
                },
            ]
        },
        {
            name: 'A1',
            description: '..',
            subjects: [
                {
                    name: "Word order",
                    questions: []
                },
                {
                    name: "Quantifiers",
                    questions: []
                },
                {
                    name: "Capitalization",
                    questions: []
                },
                {
                    name: "Spelling",
                    questions: []
                },
                {
                    name: "Reading comprehension",
                    questions: []
                },
                {
                    name: "Questions",
                    questions: []
                },
            ]
        }
    ], function() {
        console.log('Done adding exercises!');

        process.exit();
    });
});
