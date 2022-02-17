function recursiveRange(start, end) {
  if (start == end) return [start];
  //when recursion get to start value append it to an array
  else {
    arr = range(start, end - 1); // call recursive function until end value == start value
    arr.push(end); //append to array end value
    return arr; // start, end-m, end-m+1 ..., end-m + m)
  }
}

function range(start, end, step = start < end ? 1 : -1) {
  //if no step is indicated set it to an logical value
  let arr = []; // if a non logical range is wanted return empty array
  if (step > 0) {
    for (let index = start; index <= end; index += step) arr.push(index);
  } else {
    for (let index = start; index >= end; index += step) arr.push(index);
  }
  console.log(arr);
  return arr;
}

function sum(range) {
  let value = 0;
  for (const VALUE of range) value += VALUE;
  return value;
}
console.log(sum(range(10, 10, 10)));
