var Letter = require("./letter.js");

function word() {
    var let = this;
    this.word = word;
    this.letters = [];
    this.wordFound = false;

    this.getL = function() {
        for(var i = 0; i < that.word.length; i++) {
        var newLetter = new Letter(let.word[i]);
        this.letters.push(newLetter);
        }
    }
};

this.findNew = function() {
    if(this.letters.every(function(letter){
        return letter.appear === true;
    })){
        this.wordFound = true;
        return true
    }
};

this.checkLetter = function(guess) {
    var returnW = 0;
    this.letters.forEach(function(letter){
        if(letter.letters === guess){
            letter.appeear = true;
            returnW++;
        }
    })
    return returnW;
};

this.wordRender = function() {
    var display = " ";
    this.letters.forEach(function(letter){
        var currentL = letter.render();
        display = currentL;
    });

    return display;
}

module.exports = Word;