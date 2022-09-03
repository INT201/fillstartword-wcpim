const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
}
module.exports = fillStartWord

function fillStartWord(startWord,word){
    if(word === null || word === undefined){
        return undefined
    }
    else if(word.includes(startWord) == true){
        return word
    }
    else{
        return startWord+word
    }
  }