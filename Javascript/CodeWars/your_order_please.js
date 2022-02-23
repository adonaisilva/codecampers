function order(words) {
  // ...
  let wordsArr = words.split(" ");
  let order = wordsArr.map((word) => parseInt(word.replace(/[^1-9]/gi, "")));
  return wordsArr
    .map((word, index, array) => array[order.indexOf(index + 1)])
    .join(" ");
}
order("4of Fo1r pe6ople g3ood th5e the2");
