function digPow(n, p, initial = 0) {
  // ...
  let nAsPowArray = Array.from(n.toString(), (element, index) =>
    Math.pow(element, p + index)
  );
  let internalSum = nAsPowArray.reduce(
    (previousValue, element) => previousValue + element,
    initial
  );
  return internalSum % n == 0 ? internalSum / n : -1;
}

console.log(digPow(695, 2));
