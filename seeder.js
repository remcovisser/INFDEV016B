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
                            question: "Rick, nee.",
                            answer: "NotLikeThis.... of niet"
                        },
                        {
                            id: 2,
                            question: "What okeesapkdakd is it?",
                            answer: "High noon"
                        }
                    ]
                },
                {
                    name: "Capitalization",
                    questions: [
                        {
                            id: 1, 
                            question: "Lorem, succes.",
                            answer: "Ipsum"
                        },
                        {
                            id: 2,
                            question: "What time is it?",
                            answer: "High noon"
                        }
                    ]
                },
                {
                    name: "Spelling",
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
                    name: "Reading comprehension",
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
                    name: "Questions",
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