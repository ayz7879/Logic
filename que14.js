// find the largest number of an array

const array = [10, 20, 30, 40, 50, 80, 90, 40, 60, 10, 50];

const largestNumberOfArray = (array) => { 
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[j]<array[i]) {
                let temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }
    console.log(`largest number of array is ${array[array.length-1]}`)
    console.log(`smallest number of array is ${array[0]}`)
 }
 largestNumberOfArray(array)