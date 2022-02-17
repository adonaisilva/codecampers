// functions that create new functions.

function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10); //greaterThan10 is now an arrow function (m) => m>n
console.log(greaterThan10(11)); // (11) => 11>10
// → true

// functions that change other functions.

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

// functions that provide new types of control flow.
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even
