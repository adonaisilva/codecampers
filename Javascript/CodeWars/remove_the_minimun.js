function removeSmallest(array) {
  if (!array.length) return [];
  let numbers = Array.from(array);
  numbers.splice(
    numbers.indexOf(
      numbers.reduce(function (prev, curr) {
        return curr < prev ? curr : prev;
      })
    ),
    1
  );
  return numbers;
}
console.log(removeSmallest([2, 2, 1, 2, 1]));
