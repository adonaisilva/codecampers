function destroyer(arr, ...dest) {
  //creates a new array with filtered elements
  return arr.filter((element) => !dest.includes(element));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
