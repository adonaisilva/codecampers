const size = 8;
let str = "";
for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    str += (row + col) % 2 == 0 ? " " : "#"; // if any row or column are odd add an # symbol to string else add an empty space
  }
  str += "\n"; // add a line break at the end of every row
}
console.log(str);
