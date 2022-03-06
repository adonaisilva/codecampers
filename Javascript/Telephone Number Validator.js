function telephoneCheck(str) {
  const regexp = new RegExp(
    /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?(\d{3})[\-\s]?(\d{4})$/
  );
  //   console.log(regexp.test(str));
  return regexp.test(str);
}

telephoneCheck("(555)-555-5555");
