function isEven(number) {
  number *= number < 0 ? -1 : 1; // if the number is negative transform it to positive
  if (number === 0) return true;
  // base case when even
  else if (number === 1) return false;
  // base case when odd
  else return isEven(number - 2); // recursion until base case is evaluated
}

console.log(isEven(-50));
