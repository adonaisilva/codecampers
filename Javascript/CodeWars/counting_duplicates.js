function duplicateCount(text) {
  //...
  let [...chars] = text.toLowerCase();
  uniques = chars
    .filter((char, index, array) => array.indexOf(char) == index)
    .sort();
  counted = Array.from(uniques).fill(0);
  return counted
    .map((element, index) => {
      for (let char of chars) {
        if (char == uniques[index]) {
          element++;
        }
      }
      return element;
    })
    .filter((element) => element > 1).length;
}
console.log(duplicateCount("abGFDGZCGCe"));
console.log([1, 2, 3].includes(2, -2));
