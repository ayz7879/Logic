// sum of primes number

const isPrime = (num) => {
  let count = 0;
  for (let index = 1; index <= num; index++) {
    if (num % index == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
};

const sumOfPrimes = (start,end) => {
  let sum = 0;
  for (let index = start; index <= end; index++) {
    if (isPrime(index)) {
      sum = sum + index;
    }
  }
  return sum;
};
console.log(sumOfPrimes(1,10));
