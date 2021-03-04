const fs = require('fs')

const file = fs.readFileSync('payload.txt').toString('utf8');

const groups = file.split('\n\n').filter(line => line.length > 0)

var partOne = 0;
groups.filter(group =>countAnswers(group));

console.log('Part 1: ' + partOne);

function countAnswers(group){
  let uniqueArr = [];
  for (var i = 0; i < group.length; i++){
    let question = group.charAt(i);
    if(question != '\n'){
      if(!uniqueArr.includes(question)){
        uniqueArr.push(question);
      }
    } 
    if(i === group.length -1){
      partOne += uniqueArr.length;
    }
  }
}
