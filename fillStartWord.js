const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
}
module.exports = fillStartWord

function fillStartWord(startWord,word){
  if(word === null || word === undefined){
      return console.log(undefined)
  }
  else if(word.includes(startWord) == true){
      return console.log(word)
  }
  else{
      return console.log(startWord+word)
  }
}
fillStartWord("1-2565-","Hello World")
fillStartWord("JS","beginner")
fillStartWord("first","firststep")
fillStartWord("first",null)
fillStartWord("first",undefined)