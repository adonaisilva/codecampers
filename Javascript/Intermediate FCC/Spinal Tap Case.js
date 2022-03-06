function spinalCase(str) {
  const regExp = new RegExp(/\W|\_|(?=[A-Z])/, "");
  return str.split(regExp).join("-").toLowerCase();
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
