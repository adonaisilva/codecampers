function rot13(str) {
  const alpha = Array.from(Array(26)) /*Array of null characters*/
    .map(
      (arrElem, index) => index + 65
    ) /*convert to integer from (0 to 26)+65*/
    .map((arrElem2) => String.fromCharCode(arrElem2));
  /*convert to ascii characters*/
  //   console.log(alpha);
  let strArr = Array.from(str); /*convert arg to array*/
  //   console.log(strArr);
  let numArr = [];
  for (let index = 0; index < strArr.length; index++) {
    if (alpha.indexOf(strArr[index]) >= 13) {
      numArr.push(alpha.indexOf(strArr[index]) - 13);
    } else if (alpha.indexOf(strArr[index]) === -1) {
      numArr.push(strArr[index]);
    } else {
      numArr.push(25 - alpha.indexOf(strArr[index]) - 13);
    }
  }
  console.log(numArr);
}
//     numArr.push(alpha.indexOf(strArr[index]));
//     console.log(typeof alpha.indexOf(strArr[index]));
//   }
//   console.log(numArr);
//   return str;
// }

rot13("SERR PBQR PNZC");
