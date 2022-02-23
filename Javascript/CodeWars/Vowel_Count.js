function getCount(str) {
  var vowelsCount = (str.match(/[aeiou]/g) || []).length;

  return vowelsCount;
}
getCount("v");
