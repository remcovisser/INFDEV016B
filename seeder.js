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
            name: 'A1',
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
                            answer: "at 9 o'clock"
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
            name: 'A2',
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
                            question: "(what, when, why) do you like the most?",
                            answer: "what"
                        },
                        {
                            id: 2,
                            question: "(where, when, what) does Bill get up in the morning?",
                            answer: "when"
                        },
                        {
                            id: 3,
                            question: "(why, when, how) don't you go by bus, Max?",
                            answer: "why"
                        },
                        {
                            id: 4,
                            question: "(how, where, what) hobbies do you have?",
                            answer: "what"
                        },
                        {
                            id: 5,
                            question: "(what, where, how) do they go to every week?",
                            answer: "where"
                        },
                        {
                            id: 6,
                            question: "(when, how, what) old is Mike?",
                            answer: "how"
                        },
                        {
                            id: 7,
                            question: "(what, when, how) is Susan's birthday?",
                            answer: "when"
                        },
                        {
                            id: 8,
                            question: "(why, where, what) are my exercise books?",
                            answer: "where"
                        },
                        {
                            id: 9,
                            question: "(who, what, why) are you doing at the moment, Peter?",
                            answer: "what"
                        },
                        {
                            id: 10,
                            question: "(what, where, why) do they live?",
                            answer: "where"
                        }
                    ]
                }
            ]
        },
        {
            name: 'B1',
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
                            question: "Dylan is rother annooiing, today",
                            answer: "Dylan is rather annoying, today"
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
                            question: "(What, Why, Where, How, When) is the weather like today?",
                            answer: "What"
                        },
                        {
                            id: 2,
                            question: "(What, Why, Where, How, When) don't you like pears?",
                            answer: "Why"
                        },
                        {
                            id: 3,
                            question: "(What, Why, Where, How, When) is the flying vehicle called?",
                            answer: "What"
                        },
                        {
                            id: 4,
                            question: "(What, Why, Where, How, When) is my shirt",
                            answer: "Where"
                        },
                        {
                            id: 5,
                            question: "(What, Why, Where, How, When) do they get to school?",
                            answer: "How"
                        },
                        {
                            id: 6,
                            question: "(What, Why, Where, How, When) does your father go to work?",
                            answer: "When"
                        },
                        {
                            id: 7,
                            question: "(What, Why, Where, How, When) does your father work?",
                            answer: "Where"
                        },
                        {
                            id: 8,
                            question: "(What, Why, Where, How, When) is his job?",
                            answer: "What"
                        },
                        {
                            id: 9,
                            question: "(What, Why, Where, How, When) do you like your coffee?",
                            answer: "How"
                        },
                        {
                            id: 10,
                            question: "(What, Why, Where, How, When) is the point of making this dumb project?",
                            answer: "What"
                        }
                    ]
                }
            ]
        },
        {
            name: 'B2',
            description: '....',
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
                            question: "(Did, Does, Do) you know where we have to go?",
                            answer: "Do"
                        },
                        {
                            id: 2,
                            question: "(Did, Does, Do) your father make breakfast often",
                            answer: "Does"
                        },
                        {
                            id: 3,
                            question: "(Did, Does, Do) you upload pictures?",
                            answer: "Do"
                        },
                        {
                            id: 4,
                            question: "(Did, Does, Do) you go on holiday last year?",
                            answer: "Did"
                        },
                        {
                            id: 5,
                            question: "(Did, Does, Do) he care?",
                            answer: "Does"
                        },
                        {
                            id: 6,
                            question: "I think he (Did, Does, Do).",
                            answer: "does"
                        },
                        {
                            id: 7,
                            question: "(Did, Does, Do) you learn how to cook?",
                            answer: "Did"
                        },
                        {
                            id: 8,
                            question: "What (Did, Does, Do) you do after school?",
                            answer: "do"
                        },
                        {
                            id: 9,
                            question: "(Did, Does, Do) your cats climb trees?",
                            answer: "Do"
                        },
                        {
                            id: 10,
                            question: "(Did, Does, Do) your friend visit museums?",
                            answer: "Does"
                        }
                    ]
                }
            ]
        },
        {
            name: 'C1',
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
                            question: "When ... the race begin??",
                            answer: "does"
                        },
                        {
                            id: 2,
                            question: "... you sell fish?",
                            answer: "Do"
                        },
                        {
                            id: 3,
                            question: "... plays the trumpet?",
                            answer: "Who"
                        },
                        {
                            id: 4,
                            question: "where ... the plane fly to?",
                            answer: "did"
                        },
                        {
                            id: 5,
                            question: "... you have a brother?",
                            answer: "Do"
                        },
                        {
                            id: 6,
                            question: "... the man know how to drive the car?",
                            answer: "Does"
                        },
                        {
                            id: 7,
                            question: "... it time to go home?",
                            answer: "Is"
                        },
                        {
                            id: 8,
                            question: "... Mike play volleyball?",
                            answer: "Does"
                        },
                        {
                            id: 9,
                            question: "... you fly a plane?",
                            answer: "Can"
                        },
                        {
                            id: 10,
                            question: "When ... you attend the festival last year?",
                            answer: "did"
                        }
                    ]
                }
            ]
        },
        {
            name: 'C2',
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
