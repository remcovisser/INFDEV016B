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
                            choices:[
                                {
                                    a: "I walks to the stor.",
                                    b: "I walked to the store.",
                                    c: "Sentence is already correct."
                                }
                            ]
                        },
                        {
                            id: 2,
                            question: "I have sleeped ferry well.",
                            answer: "I have slept.",
                            choices:[
                                {
                                    a: "I have slept ferry well..",
                                    b: "I have slept very well.",
                                    c: "Sentence is already correct."
                                }
                            ]
                        },
                        {
                            id: 3,
                            question: "Your annoying me quite a byte..",
                            answer: "He changed too much.",
                            choices:[
                                {
                                    a: "Your annoying me quite a bit.",
                                    b: "you're annoying me quite a bit.",
                                    c: "Sentence is already correct."
                                }
                            ]
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