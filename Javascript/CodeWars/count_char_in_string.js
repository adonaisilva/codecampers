function count(string) {
  // The function code should be here
  let count = {};
  const uniques = new Set(string);
  uniques.forEach(
    (element) =>
      (count[element] = string.match(new RegExp(element, "gi")).length)
  );
  console.log(count);
  return count;
}

count("aba");
