function sortArray(array) {
  // Return a sorted array.
  let sorted = Array.from(array)
    .sort((a, b) => a - b)
    .filter((c) => c % 2);
  let auxIndex = 0;
  array.forEach((element, index, array) => {
    if (element % 2) {
      array[index] = sorted[auxIndex];
      auxIndex++;
    }
  });
  return array;
}
console.log(sortArray([2, 11, 4, 5, 6, 8]));

/* function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
 */
