function myFunc(a, b) {
  return a + b;
}

console.log(myFunc(undefined, 2)); // NaN
console.log(myFunc(null, 2)); // 2
console.log(myFunc(0, 2)); // 2