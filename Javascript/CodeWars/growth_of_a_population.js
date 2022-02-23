function nbYear(p0, percent, aug, p, count = 0) {
  // your code p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
  p0 = Math.floor(p0 * (percent == null ? 0 : percent / 100 + 1) + aug);
  count++;
  if (p0 < p) count = nbYear(p0, percent, aug, p, count);
  return count;
}

console.log(nbYear(1500, 5, 100, 5000));
