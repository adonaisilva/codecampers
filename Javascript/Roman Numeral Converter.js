function convertToRoman(num) {
  const ONES = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const TENS = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const HUNDREDS = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const THOUSANDS = ["", "M", "MM", "MMM"];
  const ROMANS = [ONES, TENS, HUNDREDS, THOUSANDS];
  //   const ROMANS = [THOUSANDS, HUNDREDS, TENS, ONES];
  let roman = "";
  let numArr = Array.from(String(num));
  for (let index = numArr.length - 1; index >= 0; index--) {
    // console.log(index);
    // console.log(numArr[numArr.length - index - 1]);
    roman += ROMANS[index][numArr[numArr.length - index - 1]];
  }
  //   console.log(roman);
  num = roman;
  return num;
}

console.log(convertToRoman(386));
