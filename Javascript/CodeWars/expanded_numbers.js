function expandedForm(num) {
  // Your code here
  return (num + "")
    .split("")
    .map((x, i) => (x != 0 ? x.padEnd((num + "").length - i, "0") : ""))
    .filter((x) => x != "")
    .join(" + ");
}
console.log(expandedForm(70304));
