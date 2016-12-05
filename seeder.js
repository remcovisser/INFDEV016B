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
            name: 'Name one'
        },

        {
            name: 'Name two'
        }
    ], function() {
        console.log('Done adding exercises!');

        process.exit();
    });
});