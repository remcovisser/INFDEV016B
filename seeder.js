require('mongodb').MongoClient.connect('mongodb://localhost:27017/EnglishPractise', function(err, db) {
    if (err) {
        console.error('Unable to connect to MongDB:');
        throw new Error(err);
    }

    // Cler old collections
    db.collection('exercises').drop();

    db.collection('exercises').insertMany([
        {
            name: 'Name one'
        },

        {
            name: 'Name two'
        }
    ], function() {
        console.log('Done!');

        process.exit();
    });
});