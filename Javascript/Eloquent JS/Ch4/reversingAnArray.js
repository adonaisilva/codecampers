function reverseArray(array) {
  let arr = [];
  for (const elem of array) arr.unshift(elem);
  return arr;
}

function reverseArrayInPlace(array) {
  for (let index = array.length - 1; index >= 0; index--) {
    array.push(array[index]);
    array.splice(index, 1);
  }
  return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]));
