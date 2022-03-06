function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  let outArr = arr.map((x) => {
    return {
      name: x.name,
      orbitalPeriod: Math.round(
        Math.PI * 2 * Math.sqrt((x.avgAlt + earthRadius) ** 3 / GM)
      ),
    };
  });
  return outArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
