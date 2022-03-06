function gcd(a, b) {
  // Euclidean_algorithm for greatest common divisor
  if (b == 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  let sC;
  for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
    if (i == Math.min(...arr)) {
      sC = lcm(i, i + 1);
    } else {
      sC = lcm(sC, i + 1);
    }
  }
  return sC;
}

smallestCommons([1, 5]);
smallestCommons([23, 18]);
