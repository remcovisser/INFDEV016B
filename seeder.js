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
                            question: "When are you leaving (yesterday / in 9 o'clock / at 9 o'clock)?",
                            answer: "At 9 o'clock"
                        },
                        {
                            id: 2,
                            question: "Where are you going? (by train, to France, in 9 minutes)",
                            answer: "to France"
                        },
                        {
                            id: 3, 
                            question: "How will you go there? (tomorrow / by plane / in 6 minutes)",
                            answer: "by plane"
                        },
                        {
                            id: 4,
                            question: "Why are you going? (by plane, because it's his birthday, im bored)",
                            answer: "because it's his birthday"
                        },
                        {
                            id: 5, 
                            question: "Who is joining you? (Peter, someone, I'm going)",
                            answer: "Peter"
                        },
                        {
                            id: 6,
                            question: "Whose suitcase is that? (Johnny's, my dog's, hers)",
                            answer: "Johnny's"
                        },
                        {
                            id: 7, 
                            question: "What book will you read? (That book, in 9 minutes, a manga)",
                            answer: "That book"
                        },
                        {
                            id: 8,
                            question: "What language are you studying? (France, Greece, Japanese)",
                            answer: "Japanese"
                        },
                        {
                            id: 9, 
                            question: "What is your dog's name? (You are my dog, Woof, Dad)",
                            answer: "Woof"
                        },
                        {
                            id: 10,
                            question: "On what date was your dog born? (a few days ago, 20 minutes from now on, January 1st)",
                            answer: "January 1st"
                        }
                    ]
                }
            ]
        },

        {
            name: 'Level 2',
            description: 'This is a beginner level english.',
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
                            question: "When are you leaving (yesterday / in 9 o'clock / at 9 o'clock)?",
                            answer: "At 9 o'clock"
                        },
                        {
                            id: 2,
                            question: "Where are you going? (by train, to France, in 9 minutes)",
                            answer: "to France"
                        },
                        {
                            id: 3, 
                            question: "How will you go there? (tomorrow / by plane / in 6 minutes)",
                            answer: "by plane"
                        },
                        {
                            id: 4,
                            question: "Why are you going? (by plane, because it's his birthday, im bored)",
                            answer: "because it's his birthday"
                        },
                        {
                            id: 5, 
                            question: "Who is joining you? (Peter, someone, I'm going)",
                            answer: "Peter"
                        },
                        {
                            id: 6,
                            question: "Whose suitcase is that? (Johnny's, my dog's, hers)",
                            answer: "Johnny's"
                        },
                        {
                            id: 7, 
                            question: "What book will you read? (That book, in 9 minutes, a manga)",
                            answer: "That book"
                        },
                        {
                            id: 8,
                            question: "What language are you studying? (France, Greece, Japanese)",
                            answer: "Japanese"
                        },
                        {
                            id: 9, 
                            question: "What is your dog's name? (You are my dog, Woof, Dad)",
                            answer: "Woof"
                        },
                        {
                            id: 10,
                            question: "On what date was your dog born? (a few days ago, 20 minutes from now on, January 1st)",
                            answer: "January 1st"
                        }
                    ]
                }
            ]
        },
        {
            name: 'Level 3',
            description: '...',
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
                            question: "When are you leaving (yesterday / in 9 o'clock / at 9 o'clock)?",
                            answer: "At 9 o'clock"
                        },
                        {
                            id: 2,
                            question: "Where are you going? (by train, to France, in 9 minutes)",
                            answer: "to France"
                        },
                        {
                            id: 3, 
                            question: "How will you go there? (tomorrow / by plane / in 6 minutes)",
                            answer: "by plane"
                        },
                        {
                            id: 4,
                            question: "Why are you going? (by plane, because it's his birthday, im bored)",
                            answer: "because it's his birthday"
                        },
                        {
                            id: 5, 
                            question: "Who is joining you? (Peter, someone, I'm going)",
                            answer: "Peter"
                        },
                        {
                            id: 6,
                            question: "Whose suitcase is that? (Johnny's, my dog's, hers)",
                            answer: "Johnny's"
                        },
                        {
                            id: 7, 
                            question: "What book will you read? (That book, in 9 minutes, a manga)",
                            answer: "That book"
                        },
                        {
                            id: 8,
                            question: "What language are you studying? (France, Greece, Japanese)",
                            answer: "Japanese"
                        },
                        {
                            id: 9, 
                            question: "What is your dog's name? (You are my dog, Woof, Dad)",
                            answer: "Woof"
                        },
                        {
                            id: 10,
                            question: "On what date was your dog born? (a few days ago, 20 minutes from now on, January 1st)",
                            answer: "January 1st"
                        }
                    ]
                }
            ]
        },
        {
            name: 'Level 4',
            description: '....',
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
                            question: "When are you leaving (yesterday / in 9 o'clock / at 9 o'clock)?",
                            answer: "At 9 o'clock"
                        },
                        {
                            id: 2,
                            question: "Where are you going? (by train, to France, in 9 minutes)",
                            answer: "to France"
                        },
                        {
                            id: 3, 
                            question: "How will you go there? (tomorrow / by plane / in 6 minutes)",
                            answer: "by plane"
                        },
                        {
                            id: 4,
                            question: "Why are you going? (by plane, because it's his birthday, im bored)",
                            answer: "because it's his birthday"
                        },
                        {
                            id: 5, 
                            question: "Who is joining you? (Peter, someone, I'm going)",
                            answer: "Peter"
                        },
                        {
                            id: 6,
                            question: "Whose suitcase is that? (Johnny's, my dog's, hers)",
                            answer: "Johnny's"
                        },
                        {
                            id: 7, 
                            question: "What book will you read? (That book, in 9 minutes, a manga)",
                            answer: "That book"
                        },
                        {
                            id: 8,
                            question: "What language are you studying? (France, Greece, Japanese)",
                            answer: "Japanese"
                        },
                        {
                            id: 9, 
                            question: "What is your dog's name? (You are my dog, Woof, Dad)",
                            answer: "Woof"
                        },
                        {
                            id: 10,
                            question: "On what date was your dog born? (a few days ago, 20 minutes from now on, January 1st)",
                            answer: "January 1st"
                        }
                    ]
                }
            ]
        },
        {
            name: 'Level 5',
            description: '....',
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
                            question: "When are you leaving (yesterday / in 9 o'clock / at 9 o'clock)?",
                            answer: "At 9 o'clock"
                        },
                        {
                            id: 2,
                            question: "Where are you going? (by train, to France, in 9 minutes)",
                            answer: "to France"
                        },
                        {
                            id: 3, 
                            question: "How will you go there? (tomorrow / by plane / in 6 minutes)",
                            answer: "by plane"
                        },
                        {
                            id: 4,
                            question: "Why are you going? (by plane, because it's his birthday, im bored)",
                            answer: "because it's his birthday"
                        },
                        {
                            id: 5, 
                            question: "Who is joining you? (Peter, someone, I'm going)",
                            answer: "Peter"
                        },
                        {
                            id: 6,
                            question: "Whose suitcase is that? (Johnny's, my dog's, hers)",
                            answer: "Johnny's"
                        },
                        {
                            id: 7, 
                            question: "What book will you read? (That book, in 9 minutes, a manga)",
                            answer: "That book"
                        },
                        {
                            id: 8,
                            question: "What language are you studying? (France, Greece, Japanese)",
                            answer: "Japanese"
                        },
                        {
                            id: 9, 
                            question: "What is your dog's name? (You are my dog, Woof, Dad)",
                            answer: "Woof"
                        },
                        {
                            id: 10,
                            question: "On what date was your dog born? (a few days ago, 20 minutes from now on, January 1st)",
                            answer: "January 1st"
                        }
                    ]
                }
            ]
        },
        {
            name: 'Level 6',
            description: '..',
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
                            question: "When are you leaving (yesterday / in 9 o'clock / at 9 o'clock)?",
                            answer: "At 9 o'clock"
                        },
                        {
                            id: 2,
                            question: "Where are you going? (by train, to France, in 9 minutes)",
                            answer: "to France"
                        },
                        {
                            id: 3, 
                            question: "How will you go there? (tomorrow / by plane / in 6 minutes)",
                            answer: "by plane"
                        },
                        {
                            id: 4,
                            question: "Why are you going? (by plane, because it's his birthday, im bored)",
                            answer: "because it's his birthday"
                        },
                        {
                            id: 5, 
                            question: "Who is joining you? (Peter, someone, I'm going)",
                            answer: "Peter"
                        },
                        {
                            id: 6,
                            question: "Whose suitcase is that? (Johnny's, my dog's, hers)",
                            answer: "Johnny's"
                        },
                        {
                            id: 7, 
                            question: "What book will you read? (That book, in 9 minutes, a manga)",
                            answer: "That book"
                        },
                        {
                            id: 8,
                            question: "What language are you studying? (France, Greece, Japanese)",
                            answer: "Japanese"
                        },
                        {
                            id: 9, 
                            question: "What is your dog's name? (You are my dog, Woof, Dad)",
                            answer: "Woof"
                        },
                        {
                            id: 10,
                            question: "On what date was your dog born? (a few days ago, 20 minutes from now on, January 1st)",
                            answer: "January 1st"
                        }
                    ]
                }
            ]
        }
    ], function() {
        console.log('Done adding exercises!');

        process.exit();
    });
});
