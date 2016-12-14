var sentences = ["I walked to schoole", "I ated an banana", "I like treeses", "She stopped by"];
var shuffledSentences = [];
var questionCount = 0;

sentences.forEach(sentence => {
    shuffledSentences.push(sentence.split(' '));
});

shuffledSentences.forEach(sentence => {
    shuffledSentences.push(sentence.reverse());
    questionCount++;

    // String interpolation in ES6 (https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Template_literals)
    console.log(`Question ${questionCount}: ${sentence}`);
});
//
// require('mongodb').MongoClient.connect('mongodb://localhost:27017/EnglishPractise', function(err, db){
//     if(err){
//         console.log("Unable to connect to MongoDB:");
//         throw new Error(err);
//     }
//
//     var collection = db.collection('exercises');
//
//     collection.find().toArray(function(err, items){
//         console.log(items);
//     });
// });