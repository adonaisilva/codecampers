function sumPrimes(num) {
  if (num <= 1) return 0;
  return sieve(num).reduce((a, b) => a + b, 0);
}

function sieve(n) {
  // create an array of prime numbers up to n by the sieve of Eratosthenes ref https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode
  let A = Array(n + 1).fill(true);
  A[0] = false;
  A[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (A[i]) {
      for (let j = i ** 2; j <= n; j += i) {
        A[j] = false;
      }
    }
  }
  return A.map((x, i) => i * x).filter((x) => x != 0);
}

sumPrimes(10);
