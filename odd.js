function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is even: " + isOdd(8));