// find the largest element of an array
let array = [12, 5, 23, 45, 9, 17, 8, 40];

for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[j]>array[i]){
            let temp = array[i];
            array[i]=array[j]
            array[j]=temp;
        }
    }
}
console.log(`largest number or array is ${array[0]}`)
console.log(`smallest number of array is ${array[array.length-1]}`)