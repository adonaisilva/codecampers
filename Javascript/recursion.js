function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    let res = [];
  } else {
    let res = rangeOfNumbers(startNum, endNum - 1);
    res.push(endNum - 1);
    console.log(startNum, endNum);
    return res;
  }
}
rangeOfNumbers(1, 5);
