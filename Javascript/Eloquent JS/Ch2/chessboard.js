const size = 4;
let str = "";
for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    str += row % 2 == 0 ? (col % 2 == 0 ? " " : "#") : "";
    str += row % 2 != 0 ? (col % 2 == 0 ? "#" : " ") : "";
  }
  str += "\n";
}
console.log(str);
