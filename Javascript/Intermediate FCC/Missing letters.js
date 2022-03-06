function fearNotLetter(str) {
  let strArr = str.split("").map((el) => el.charCodeAt(0));
  let fullArr = Array(Math.max(...strArr) - Math.min(...strArr) + 1)
    .fill(0)
    .map((_, i) => Math.min(...strArr) + i);

  const newArr = [];
  fullArr.forEach((element) => {
    if (strArr.includes(element) && fullArr.includes(element)) return;
    newArr.push(element);
  });
  return !newArr.length ? undefined : String.fromCharCode(newArr[0]);
}

fearNotLetter("abce");
