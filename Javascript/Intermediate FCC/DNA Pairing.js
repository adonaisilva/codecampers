function pairElement(str) {
  const dnaComplements = { A: "T", T: "A", C: "G", G: "C" };
  return str.split("").map((symbol) => [symbol, dnaComplements[symbol]]);
}

console.log(pairElement("GCG"));
