function rot13(str) {
  const alpha = Array.from(Array(26)) /*Array of null characters*/
    .map((_, index) => index + 65) /*convert to integer from (0 to 26)+65*/
    .map((el) => String.fromCharCode(el)); /*convert to ascii characters*/

  let strArr = Array.from(str); /*convert arg to array*/

  let descArr = strArr.map((el) => {
    let indexOf = alpha.indexOf(el);
    if (indexOf >= 13) return alpha[indexOf - 13];
    else if (indexOf == -1) return el;
    else return alpha[indexOf + 13];
  });
  return descArr.join("");
}

rot13("SERR PBQR PNZC");
