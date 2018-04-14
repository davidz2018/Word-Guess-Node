var inquire = require("inquire");
var fs = require('fs');
var wordListPath = require('word-list');
var word = require('./word.js');
var wordArray = fs.readFileSync(wordListPath, 'utf8'). split('\n');

