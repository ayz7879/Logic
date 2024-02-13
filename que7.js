// remove element an array
let array = [1, 2, 3, 4, 5, 5, 6, 7, 8];

const removeDuplicate = (array) => { 
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]==array[j]){
                array[i] = ''
            }
        }
    }
    console.log(array)
 }
 removeDuplicate(array)