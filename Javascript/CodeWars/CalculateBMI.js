function bmi(weight, height) {
  const BMI = weight / height ** 2;
  const TYPE = {
    Underweight: 18.5,
    Normal: 25.0,
    Overweight: 30.0,
    Obese: 30.0,
  };
  //   console.log(TYPE);
  for (const type in TYPE) {
    if (type == "Obese") return type;
    if (BMI <= TYPE[type]) return type;
  }
  return undefined;
}

console.log(bmi(80, 1.8));
