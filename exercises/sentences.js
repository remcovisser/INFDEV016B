class Sentences{
}

var sentences = ["I walked to school", "I ate a banana", "I like trees", "She stopped by"];
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