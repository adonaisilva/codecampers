function arrayDiff(a, b) {
  if (!a.length || !b.length) return a;
  b.forEach((element) => {
    let newA = a.filter((e) => e != element);
    a = newA;
    console.log(newA);
  });
  console.log(a);
}

arrayDiff([], [4, 5]);
arrayDiff([3, 4], [3]);
arrayDiff([1, 8, 2], []);
