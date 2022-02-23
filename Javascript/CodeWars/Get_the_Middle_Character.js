function getMiddle(s) {
  //Code goes here!
  const l = s.length;
  const lm = l % 2;
  const lh = Math.round(l / 2);
  return s.slice(lh - 1, lh + !lm * 1);
}

getMiddle("testing");
getMiddle("middle");
