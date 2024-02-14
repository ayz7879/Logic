// convert decimal number to binary number

const decimalToBinary = (num) => { 
    let rem,binary=0,i=1
    while (num!=0) {
        rem = num%2
        num = num/2
        binary = binary + (rem*i)
        i = i*10
    }
    console.log(binary)
 }  
 decimalToBinary(2)