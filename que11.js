// roman number conver into integer

const romanToInteger = (string) => { 
    let newMap = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum = sum+newMap[string[i]]
    }
    console.log(sum)
 }
  romanToInteger("IVL")