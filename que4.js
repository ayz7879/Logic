// FizzBuzz number check

const checkFizzBuzz = (num) => { 
    for (let i = 1; i <= num; i++) {
        if (i%3 == 0) {
            console.log("Fizz")
        }
        else if (i%5 == 0) {
            console.log("Buzz")
        }
        else if (i%5 == 0 && i%3 ==0) {
            console.log("FizzBuzz")
        }
        else{
            console.log(i)
        }
    }
 }
 checkFizzBuzz(150)

