function sumAll(arr, diff = 1) {
  //TODO: check for arithmethic progression general formula
  return [...arr]
    .sort((a, b) => a - b)
    .reduce((a, b) => {
      return ((b - a + 1) / 2) * (2 * a + (b - a) * diff);
    });
}

console.log(sumAll([1, 4]));
