function every(array, predicate_function) {
  return array.reduce(
    (prev, current) => prev && predicate_function(current),
    true
  );
}

function everyfor(array, predicate_function) {
  for (let index = 0; index < array.length; index++) {
    if (!predicate_function(array[index])) return false;
  }
  return true;
}

function everyfor2(array, predicate_function) {
  for (let element of array) {
    if (!predicate_function(element)) return false;
  }
  return true;
}

function everySome(array, predicate_function) {
  return !array.some((element) => !predicate_function(element));
}

console.log(everySome([1, 3, 5], (n) => n < 10));
