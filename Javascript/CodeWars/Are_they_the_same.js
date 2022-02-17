function comp(array1, array2) {
  //your code here
  if (array1 == null || array2 == null) return false;
  if (!findAllElementsInArray(array1, array2, true)) return false;
  if (!findAllElementsInArray(array2, array1, false)) return false;
  return true;
}

function findElementInArray(element, array) {
  return array.findIndex((elementInArray) => elementInArray == element);
}

function findAllElementsInArray(
  arrayGetElements,
  arrayToCompare,
  multiplicity = false
) {
  let findedIndex;
  let arrayToCompareCopy = Array.from(arrayToCompare);
  arrayGetElements.forEach((element) => {
    findedIndex = findElementInArray(
      multiplicity ? element ** 2 : Math.sqrt(element),
      arrayToCompareCopy
    );
    if (findedIndex == -1) return false;
    arrayToCompareCopy[findedIndex] = "";
  });
  if (arrayToCompareCopy.some((element) => element != "")) return false;
  return true;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

console.log(comp(a1, a2));
