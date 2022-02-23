function isPangram(string) {
  //...
  const ASCII = [65, 91];
  let letters = Array(ASCII[1] - ASCII[0]).fill(0);
  string = string
    .toUpperCase()
    .match(/[A-Z]/g)
    .map((char) => char.codePointAt(0));
  string.forEach((char) => (letters[char - ASCII[0]] += 1));
  return !letters.includes(0);
}

console.log(isPangram("This is not a pangram."));
