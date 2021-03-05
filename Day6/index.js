const fs = require('fs')

const file = fs.readFileSync('payload.txt').toString('utf8');

const groups = file.split('\n\n')
  .filter(line => line.length > 0)
  .map(groupString => {
    return groupString.split('\n')
      .filter(line => line.length > 0)
      .map(personString => {
        return personString.split('')
      })
  })

const unifiedAnswers = groups
  .map(group => [...new Set(group.flat(1))])

const intersectedAnswers = groups
  .map(group => group.reduce((a, b) => a.filter(c => b.includes(c))))

console.log("Part 1: ", getSumOfCounts(unifiedAnswers))
console.log("Part 2: ", getSumOfCounts(intersectedAnswers))

function getSumOfCounts(answers) {
  return answers
    .map(groupAnswers => Object.keys(groupAnswers).length)
    .reduce((a, b) => a + b, 0)
}
