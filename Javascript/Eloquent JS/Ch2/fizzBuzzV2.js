let index = 0;
let finalStr = "";
do {
  index++;
  finalStr = index % 5 == 0 ? "Buzz" : index;
  finalStr = index % 3 == 0 ? "Fizz" : finalStr;
  finalStr = index % 3 == 0 && index % 5 == 0 ? "FizzBuzz" : finalStr;
  console.log(finalStr);
} while (index < 100);
