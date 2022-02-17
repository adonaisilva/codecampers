let listOr = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

function arrayToList(arr) {
  let list = {};
  for (index in arr.reverse()) {
    let obj = {};
    obj.value = arr[index];
    obj.rest = index == 0 ? null : list;
    list = obj;
  }
  return list;
}

function listToArray(lst) {
  let arr = [];
  while (true) {
    arr.push(lst.value);
    if (lst.rest == null) return arr;
    lst = lst.rest;
  }
}

function prepend(arrElem, lst) {
  return { value: arrElem, rest: lst };
}

function nth(lst, elem) {
  if (lst == null) return;
  return elem == 0 ? lst.value : nth(lst.rest, elem - 1);
}

console.log(nth(listOr, 5));
