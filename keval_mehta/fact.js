function fact(n) {
    if (n == 0) return 1;
    return n * fact(n - 1);
  }
   
  // Driver Code
  let num = 5;
  console.log("Factorial of " + num + " is " + fact(num))