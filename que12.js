// multiplication table of a given number

const multiplicationTable = (num) => { 
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num*i}`)
    }
 }
 multiplicationTable(8)