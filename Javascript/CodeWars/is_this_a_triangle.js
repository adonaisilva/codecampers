function isTriangle(...sides) {
  let sorted = sides.sort();
  if (sorted[2] == sorted[1] + sorted[0]) return false;
  for (let index = 0; index < sides.length; index++) {
    if (sides[0] > sides[1] + sides[2]) return false;
    sides.push(sides.shift());
  }
  return true;
}
