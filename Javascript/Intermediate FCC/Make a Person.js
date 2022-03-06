const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return firstAndLast;
  };
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };
  this.setFirstName = function (first) {
    firstAndLast = `${first} ${firstAndLast.split(" ")[1]}`;
  };
  this.setLastName = function (last) {
    firstAndLast = `${firstAndLast.split(" ")[0]} ${last}`;
  };
  this.setFullName = function (newFirstAndLast) {
    firstAndLast = newFirstAndLast;
  };
  return firstAndLast;
};

const bob = new Person("Bob Ross");
bob.getFullName();
