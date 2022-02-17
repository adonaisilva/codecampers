function countChar(str, char = "B") {
  //set default beheavior to count B's. this is an example of code expansion
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    //Iterate over the length of the string
    count += str[index] === char ? 1 : 0; // if the characters is equal to the wanted value increase counter by 1
  }
  return count;
}

function countBs(str) {
  return countChar(str); // use countChar with default beheavior
}

console.log(countChar("jashgdjsaghBHJBJHBJHBHB", "J"));
