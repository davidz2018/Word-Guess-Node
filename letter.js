

var Letter = function() {
    this.letter = letter;
    this.appear = false;
    this.render = function () {
        if(this.letter == " ") {
            this.appear = true;
            return " ";
        } if (this.appear === false) {
            return " ";
        } else{
            return this.letter;
        }
    };

};


module.exports = Letter;