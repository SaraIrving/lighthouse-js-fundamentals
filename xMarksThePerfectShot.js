const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  finalCoord = [0,0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      finalCoord[1] += 1;
    } else if (moves[i] === 'south') {
      finalCoord[1] -= 1;
    } else if (moves[i] === 'west') {
      finalCoord[0] -= 1;
    } else if (moves[i] === 'east') {
      finalCoord[0] += 1;
    }
  }
  return finalCoord;
}

console.log(finalPosition(moves));
