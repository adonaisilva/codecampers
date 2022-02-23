function tribonacci(signature, n) {
  signature.unshift([]);
  for (let i = 0; i != n; i++) {
    signature.push(signature.slice(-3).reduce((a, b) => a + b));
  }
  return signature.slice(1, n + 1);
}

tribonacci([1, 1, 1], 10);
