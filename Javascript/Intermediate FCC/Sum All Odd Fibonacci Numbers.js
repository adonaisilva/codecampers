function sumFibs(num) {
  let sum = 0;
  for (let fib = [0, 1]; fib[1] <= num; {}) {
    if (fib[1] % 2) sum += fib[1];
    fib.push(fib.reduce((a, b) => a + b));
    fib.shift();
  }
  return sum;
}

console.log(sumFibs(4000000));
