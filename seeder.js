require('mongodb').MongoClient.connect('mongodb://localhost:27017/EnglishPractise', function(err, db) {
    if (err) {
        console.error('Unable to connect to MongDB:');
        throw new Error(err);
    }

    // Clear old collections
    db.collection('exercises').drop();
    db.collection('users').drop();

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