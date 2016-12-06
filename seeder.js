require('mongodb').MongoClient.connect('mongodb://localhost:27017/EnglishPractise', function(err, db) {
    if (err) {
        console.error('Unable to connect to MongDB:');
        throw new Error(err);
    }

    // Clear old collections
    db.collection('exercises').drop();
    db.collection('users').drop();

    db.collection('users').insertMany([
        {
            username: 12345,
            password: 'password'
        },
        {
            username: 12346,
            password: 'password2'
        }
    ], function(){
        console.log('Done adding users!');
        process.exit();
    });

    db.collection('exercises').insertMany([
        {
            name: 'Level 1',
            description: 'This is the most basic level english.',
            subjects: [
                {
                    name: "Word order",
                    questions: [
                        {
                            id: 1,
                            question: "Rick, succes.",
                            answer: "NotLikeThis"
                        },
                        {
                            id: 2,
                            question: "What time is it?",
                            answer: "High noon"
                        }
                    ]
                },
                {
                    name: "Quantifiers",
                    questions: [
                        {
                            id: 1,
                            question: "How .... money have you got? (much/many)",
                            answer: "much"
                        },
                        {
                            id: 2,
                            question: "He has .... money left. (a little/a few)",
                            answer: "a little"
                        },
                        {
                            id: 3,
                            question: ".... time (much/many)",
                            answer: "much"
                        },
                        {
                            id: 4,
                            question: ".... children (much/many)",
                            answer: "many"
                        },
                        {
                            id: 5,
                            question: "There are two boys. .... is smiling. (each/every)",
                            answer: "each"
                        },
                        {
                            id: 6,
                            question: "The students .... received a free copy of the magazine. (each/every)",
                            answer: "each"
                        },
                        {
                            id: 7,
                            question: "Can I have .... of these apples? (some/any)",
                            answer: "some"
                        },
                        {
                            id: 8,
                            question: "Have you got .... apples? (some/any)",
                            answer: "any"
                        },
                        {
                            id: 9,
                            question: "There is .... wrong with our car. (something/anything)",
                            answer: "something"
                        },
                        {
                            id: 10,
                            question: "She looked ill, ..... . (somehow/anyhow/someway/anyway)",
                            answer: "somehow"
                        }
                    ]
                },
                {
                    name: "Capitalization"
                },
                {
                    name: "Spelling"
                },
                {
                    name: "Reading comprehension"
                },
                {
                    name: "Questions"
                }
            ]
        },

        {
            name: 'Level 2',
            description: 'This is a beginner level english.'
        },
        {
            name: 'Level 3',
            description: '...',
        },
        {
            name: 'Level 4',
            description: '....'
        },
        {
            name: 'Level 5',
            description: '....',
        },
        {
            name: 'Level 6',
            description: '..'
        }
    ], function() {
        console.log('Done adding exercises!');

        process.exit();
    });
});
