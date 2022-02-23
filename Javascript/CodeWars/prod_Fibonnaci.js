function productFib(prod) {
  // ...
  for (
    var n_0 = 0, n_1 = 1, t = 0;
    n_0 * n_1 != prod;
    t = n_1 + n_0, n_0 = n_1, n_1 = t
  ) {
    if (n_0 * n_1 > prod) return [n_0, n_1, false];
  }
  return [n_0, n_1, true];
}
console.log(productFib(5895));
