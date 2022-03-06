function uniteUnique(...arr) {
  let uniques = new Set(arr.flat());
  return [...uniques];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
