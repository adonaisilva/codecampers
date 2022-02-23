function deleteNth(arr, n) {
  // ...
  //create array with no repeated numbers
  let noRepeated = Array.from(arr)
    .sort((a, b) => a - b)
    .reduce(
      (a, b) =>
        a.length ? (b != a[a.length - 1] ? a.concat(b) : a) : a.concat(b),
      []
    );
  //convert array to list of key value arrays with values set to 0
  let noRepeatedList = new Map();
  noRepeated.forEach((e) => {
    noRepeatedList.set(e, 0);
  });
  //count n times per key, if n is exceedeed remove for instance of original array
  let output = arr
    .map((e) => {
      let value = noRepeatedList.get(e);
      if (value < n) {
        noRepeatedList.set(e, value + 1);
        return e;
      }
      return "";
    })
    .filter((e) => e != "");
  console.log(output);
  //return instance of original array (modified)
  return output;
}

deleteNth([20, 37, 20, 21], 1);

function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}
