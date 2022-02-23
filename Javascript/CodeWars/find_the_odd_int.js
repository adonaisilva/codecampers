function findOdd(A) {
  for (num of A) {
    if (A.filter((a) => a == num).length % 2) return num;
  }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
