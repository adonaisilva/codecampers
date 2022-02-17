function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2); // when called multiplier creates a enviroment where factor is bound to 2 and returns a function
console.log(twice(5)); // when called in fact we call (number) => number * factor; since factor is already bound to 2, the result is 10
// → 10
