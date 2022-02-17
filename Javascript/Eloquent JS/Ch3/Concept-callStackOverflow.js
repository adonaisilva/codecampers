function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");

// this function call overflows the call stack
