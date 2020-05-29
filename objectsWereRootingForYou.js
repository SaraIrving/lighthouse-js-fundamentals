
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'



/*function judgeVegetable (vegetables, metric) {
  var currentHighScore = 0;
  var winningSubmitter = "";
  vegetables.forEach(function(element) {
    if (element[metric] > currentHighScore) {
      currentHighScore = element[metric];
      winningSubmitter = element["submitter"];
    } 
  });
  return winningSubmitter;
}
*/


function judgeVegetable (vegetables, metric) {
  var currentHighScore = 0;
  var winningSubmitter = "";
  for (let element of vegetables) {
    if (element[metric] > currentHighScore) {
      currentHighScore = element[metric];
      winningSubmitter = element["submitter"];
    }
  };
  return winningSubmitter;
}



console.log(judgeVegetable(vegetables, metric));



// use the forEach() method to look at each element/object stored in 
//  the vegetables array individually 
// create an inline function in the forEach() that does the following:
//set a new variable to hold the metric value, initially empty 
// create a new variable to hold winning submitters name 
//compare the metric value in each array to the new variable
//if it's larger than the new variable assign it's value to the new variable
//  AND assign the submitter to the winner variable 