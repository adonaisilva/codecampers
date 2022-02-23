var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  return [...iterable].reduce((prev, curr) => {
    if (curr != prev[prev.length - 1]) {
      prev.push(curr);
    }
    return prev;
  }, []);
};
uniqueInOrder([1, 2, 2, 3, 3]);
uniqueInOrder("ABBCcAD");
