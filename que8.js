// prime number find

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


let list = [];
for (let index = 1; index <= 10; index++) {
  if (isPrime(index)) {
    list = list + index;
  }
}
for (let index = 0; index < list.length; index++) {
  const element = list[index];
  console.log(element);
}
console.log(list);
