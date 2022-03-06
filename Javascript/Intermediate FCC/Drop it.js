function dropElements(arr, func) {
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) && outArr.length == 0) {
      outArr = arr.slice(i);
    }
  }
  return outArr;
}

// dropElements([1, 2, 3], function (n) {
//   return n < 3;
// });
dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});
