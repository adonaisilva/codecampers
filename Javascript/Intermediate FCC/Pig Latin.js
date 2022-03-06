function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way") //starts with a vowel followed by 0 or more word characters, insert the entire match with way at the end
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay"); //cature 1 starts with 1 or more not a vowels, capture 2 0 or more word characters, insert cap2 cap1 with ay at the end
}

console.log(translatePigLatin("algorithm"));
