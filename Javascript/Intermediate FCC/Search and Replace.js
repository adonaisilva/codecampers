function myReplace(str, before, after) {
  after =
    before.search(/^[A-Z]/) == -1
      ? after.toLowerCase()
      : after[0].toUpperCase() + after.slice(1);
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
