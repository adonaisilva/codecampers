function diffArray(arr1, arr2) {
  //create a new array with non common elements
  const newArr = [];
  new Set(arr1.concat(arr2)).forEach((element) => {
    if (arr1.includes(element) && arr2.includes(element)) return;
    newArr.push(element);
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
