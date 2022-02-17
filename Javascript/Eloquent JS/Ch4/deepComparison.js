const LIST = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

const LIST2 = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

function deepEqual(value1, value2) {
  if (value1 === value2) return true; //if the variables are equal in value and type return true simplest case
  if (typeof value1 != "object" || typeof value2 != "object") return false; //if any variable is not an object return false only objects return non equal even if equal
  let keysValue1 = Object.keys(value1); //store keys for future use
  let keysValue2 = Object.keys(value2);
  if (keysValue1.length != keysValue2.length) return false; //if the keys length is different they are not equal
  for (let key of keysValue1) {
    //for every key in any variable
    if (!keysValue2.includes(key)) return false; //if the other variable doesn't include the same key they are not equal
    if (!deepEqual(value1[key], value2[key])) return false; //recursive check for key - value
  }
  return true; // if every non equal test pass they are equal
}

console.log(deepEqual(LIST, LIST2));
