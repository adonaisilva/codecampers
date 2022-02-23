function twoSum(numbers, target) {
  // ...
  let x, y;
  loop1: for (x = 0; x < numbers.length - 1; x++) {
    loop2: for (y = x + 1; y < numbers.length; y++) {
      if (numbers[x] + numbers[y] == target) break loop1;
    }
  }
  return [x, y];
}
