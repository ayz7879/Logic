// sum of natural number

const sumOfNaturalNumber = (num) => { 
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
 }
 console.log(sumOfNaturalNumber(2))