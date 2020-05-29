function range(start, end, step) {
  let rangeArray = [];
  if (start === undefined || end === undefined || step === undefined) {
    return rangeArray;
  }
  if (start > end) {
    return rangeArray;
  }
  if (step <= 0) {
    return rangeArray;
  }
  for (let i = start; i <= end; i += step) {
    if (i % step === 0) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));
console.log(range(0, 5, 1));
