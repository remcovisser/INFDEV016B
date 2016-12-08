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
                    name: "Quantifiers"
                },
                {
                    name: "Capitalization"
                },
                {
                    name: "Spelling",
                    questions: [
                        {
                            id: 1,
                            question: "I walket to the stor.",
                            answer: "I walked to the store.",
                        },
                        {
                            id: 2,
                            question: "I have sleeped ferry well.",
                            answer: "I have slept very well.",
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