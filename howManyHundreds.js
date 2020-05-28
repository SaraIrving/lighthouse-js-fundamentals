function howManyHundreds(num) {
  let remainder = num % 100;
  let divisibleNum = num - remainder;
  return divisibleNum / 100;
}

console.log(howManyHundreds(72));
