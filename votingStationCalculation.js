const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//Need capacity = 20, must be a school or community centre 
//Need to pull out the 2nd and 3rd elements of each nested array to test
//  against our criteria 
/* Plan: 
    1-pull out the value for the item at index 1 and 2 for each 
    nested array inside statios
    2-evaluate those values against our conditions
    3-if they pass, store item at index 0 of their nested array
      in a new array goodStations = []
    4-return goodStations array as the output from chooseStations function 
*/

const chooseStations = function (stations) {
  let goodStations = [];
  let capacity;
  let typeBuilding = "";
  for (let i = 0; i < stations.length; i++) {
    capacity = stations[i][1];
    typeBuilding = stations[i][2];
    if (capacity >= 20 && ( typeBuilding === "school" || typeBuilding === "community centre")) {
      goodStations.push(stations[i][0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
//console.log(stations[0][1]);
