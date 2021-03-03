const fs = require('fs')

const file = fs.readFileSync('payload.txt').toString('utf8');

const seats = file.split('\n\n').filter(line => line.length > 1);

const highestSeatID = seats.filter(seat =>getHighestSeatID(seat));

function getHighestSeatID(seat){
  let direction = 1;
  let range = {low: 0, high: 127};
  let result = [];
  let highestSeatID = 0;
  let newSeatID = 0;
  let seatIDs=[];
  for (var i = 0; i < seat.length; i++){
    low = range.low;
    high = range.high;
    if(seat.charAt(i) == 'F'){
      let direction = 0;
      range = getHalf(low, high, direction)
    }else if(seat.charAt(i) == 'B'){
      range = getHalf(low, high, direction)
    }else if(seat.charAt(i) == 'L'){
      range = getHalf(low, high, 0);
    }else if(seat.charAt(i) == 'R'){
      range = getHalf(low, high, 1)
    }
    if(range.low == range.high){
      result.push(range.low);
      range.low = 0;
      range.high = 7;
      if(result.length > 1){
        range.low = 0;
        range.high = 127;
      }
    }
    if(result.length == 2){
      newSeatID = (result[0] * 8) + result[1];
      seatIDs.push(parseInt(newSeatID));
      if(newSeatID > highestSeatID){
        highestSeatID = newSeatID;
      }
      result.length = 0;
    }
  }
  seatIDs.sort();
  console.log('Part 1 answer: ' + highestSeatID);
  console.log('Part 2 answer: ' + getMySeat(seatIDs));

}

function getHalf(low, high, direction){
  let newLow = 0;
  let newHigh = 0;
  if(direction == 0){
    newLow = low;
    newHigh = Math.floor((high + low)/2);
  }else if (direction == 1){
    newLow = Math.ceil((high+low)/2);
    newHigh = high;
  }
  return {low: newLow, high: newHigh};
}
function getMySeat(seatIDs){
  let mySeat = 0;
  for(var i = 0; i < seatIDs.length; i++){
    if(parseInt(seatIDs[i+1]) - parseInt(seatIDs[i]) == 2){
      mySeat = parseInt(seatIDs[i]) + 1;
    }
  }
  return mySeat;
}
