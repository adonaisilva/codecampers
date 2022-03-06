function whatIsInAName(collection, source) {
  //filter objects from collection with no coincidence with source keys - values
  const sourceKeys = Object.keys(source);
  return collection.filter((obj) => {
    return sourceKeys.every((key) => {
      return obj.hasOwnProperty(key) && obj[key] == source[key];
    });
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);
