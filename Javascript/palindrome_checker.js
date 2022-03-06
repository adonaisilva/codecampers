function palindrome(str) {
  let filtered = str.toLowerCase().match(/[a-z0-9]/g);
  return filtered.join("") == filtered.reverse().join("");
}

console.log(palindrome("My age is 0, 0 si ega ym."));
