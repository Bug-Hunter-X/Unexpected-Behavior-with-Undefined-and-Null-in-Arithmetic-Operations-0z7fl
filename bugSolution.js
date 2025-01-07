function myFunc(a = 0, b = 0) {
  //Using default parameters to handle undefined values.
  return a + b;
}

console.log(myFunc(undefined, 2)); // 2
console.log(myFunc(null, 2)); // 2
console.log(myFunc(0, 2)); // 2

function myFunc2(a, b) {
  //Explicit handling of null and undefined values using strict equality.
  a = (a === undefined || a === null) ? 0 : a;
  b = (b === undefined || b === null) ? 0 : b;
  return a + b;
}

console.log(myFunc2(undefined, 2)); // 2
console.log(myFunc2(null, 2)); // 2
console.log(myFunc2(0, 2)); // 2