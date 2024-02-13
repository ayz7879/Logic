// factorial using loop

const factorial = (num) => {
  let mul = 1;
  for (let i = 2; i <= num; i++) {
    mul *= i;
  }
  console.log(mul)
};
factorial(5)
