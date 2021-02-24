
const fs = require("fs");

fs.readFile("payload.txt", "utf-8", (error, data) => {
  const input = data.split("\n").map((line) => line.split(""));

  function partOne() {
    const gridObject = new Grid(input);
    return checkCoords(gridObject, 3, 1);
  }

  function partTwo() {
    const gridObject = new Grid(input);
    return [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ]
      .map(([directionX, directionY]) => {
        return checkCoords(gridObject, directionX, directionY);
      })
      .reduce((a, b) => a * b);
  }

  console.log(`Tree Count for part one: ${partOne()}`);
  console.log(`Tree Count for part two: ${partTwo()}`);
});

function checkCoords(gridObject, directionX, directionY) {
  for (let trees = 0, x = 0, y = 0; ; x += directionX, y += directionY) {
    const cell = gridObject.check(x, y);
    if (cell === undefined) return trees;
    if (cell === "#") trees++;
  }
}

class Grid {
  constructor(gridInput) {
    this.grid = gridInput;
    this.gridWidth = this.grid[0].length;
  }

  check(x, y) {
    return this.grid[y] && this.grid[y][x % this.gridWidth];
  }
}
