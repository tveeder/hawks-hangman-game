var Letter = require("./letter.js");

var newCharacter;

function Word(word) {
    this.string = word.toLowerCase();
    this.array = [];
    this.guessedLetter = "";
    this.createArray = function () {
        //creating an array of new Letter objects representing the letters of the underlying word
        for (var l = 0; l < this.string.length; l++) {
            newCharacter = new Letter(this.string[l]);
            this.array.push(newCharacter);
        }
    };
    this.toString = function () {
        //pushing current word characters to array, so we can turn them into a string
        var arr = [];
        for (var w = 0; w < this.array.length; w++) {
            this.array[w].guess();
            arr.push(this.array[w].character);
        }
        console.log(`
        Hidden Word: ${arr.slice(',').join(" ")}
        `);
    };
    this.trueORfalse = function (err) {
        for (var i = 0; i < this.string.length; i++) {
            this.array[i].guessedLetter = this.guessedLetter; //passing guessed character to new Letter object
            this.array[i].checkCharacter(); //matching guessed letter of each object to underlying character
        }
    };
}


// export this file as module

module.exports = Word;




