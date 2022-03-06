function findUniq(arr) {
  let unique;
  new Set(arr).forEach((element) => {
    arr.filter((x) => x == element).length == 1 ? (unique = element) : 0;
  });
  return unique;
}

console.log(findUniq([1, 0, 0]));
