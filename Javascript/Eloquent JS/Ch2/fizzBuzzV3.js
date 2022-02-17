for (let index = 1; index <= 100; index++) {
  let str = ""; //reset str
  str += index % 3 == 0 ? "Fizz" : ""; //if divisible by 3 add fizz to empty str
  str += index % 5 == 0 ? "Buzz" : ""; //if divisible by 5 add buzz to str (may be empty)
  console.log(str || index); //default output to index if string is empty (short-circuit)
}
