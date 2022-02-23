function incrementString(strng) {
  // return incrementedString
  let num = strng.match(/[0-9]+/g)[0];
  if (!num) return strng + "1";
  return strng.replace(num, String(Number(num + 1)).padStart(num.length, "0"));
}

incrementString("foobar000");
