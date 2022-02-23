function printerErrors(s) {
  return s.search(/[n-z]/g) >= 0
    ? `${s.match(/[n-z]/g).length}/${s.length}`
    : `0/${s.length}`;
}

s = "aaabbbb";

console.log(printerErrors(s));
