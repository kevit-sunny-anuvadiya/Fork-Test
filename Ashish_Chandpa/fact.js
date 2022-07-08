const n = 5;
const recursion = function (n) {
  if (n == 0) {
    return 1;
  } else {
    return n * recursion(n - 1);
  }
};
// recursion(n)
console.log(recursion(n));
