function truthCheck(collection, pre) {
  let trueArr = [];
  for (let i = 0; i < collection.length; i++) {
    if (Object.keys(collection[i]).includes(pre)) {
      trueArr.push(!!collection[i][pre]);
    } else {
      trueArr.push(false);
    }
  }
  return trueArr.every((el) => el == true);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);
