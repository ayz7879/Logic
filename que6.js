//  find maximum number in array

let array = [1, 5, 7, 9, 7, 5, 6, 10, 80, 90, 100];

const findMaximum = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[j]<array[i]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    console.log(`maximum number is ${array[array.length-1]}`)
 }
 findMaximum(array)