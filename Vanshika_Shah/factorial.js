function printFactorial(n) {
  let fact = 1;
  if (n == 0 || n == 1) {
    fact = 1;
  }
  for (i = 1; i <= n; i++) {
    fact *= i;
  }
  console.log(fact);
}

printFactorial(4);
