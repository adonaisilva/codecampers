function positiveSum(arr) {
  return arr
    .filter((element) => element >= 0)
    .reduce((acum, curr) => acum + curr, 0);
}

function litres(time) {
  return `${Math.round(time / 2)} litres`;
}
