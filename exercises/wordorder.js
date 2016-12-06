var sentences = ["Yesterday Jason went cycling", "Jason thinks Andy talks too much", "Dilan wants food"];
var generatedAnswers = [];

Array.prototype.shuffleSentence = function()
{
    //Shuffling a sentence based on Fisher-Yates
    //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    var i = this.length;
    if (i == 0) return this;
    while (--i) {
        var j = Math.floor(Math.random() * (i + 1 ));
        var a = this[i];
        var b = this[j];
        this[i] = b;
        this[j] = a;
    }
    return this;
}

function generatePossibleAnswersForSentence(sentence, amountOfAnswers)
{
    //First the one that is correct
    generatedAnswers[0] = sentence;
    for(i = 1; i < amountOfAnswers; i++)
    {
        generatedAnswers[i] = sentence.split(' ').shuffleSentence().join(' ');
        
    		console.log(generatedAnswers[i]);
    }
}

sentences.forEach(sentence=> {
	generatePossibleAnswersForSentence(sentence, 4);
})
