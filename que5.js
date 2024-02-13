// reverse array

let array = [1, 2, 3, 4, 5, 6, 7, 8, "ashish"];
const reverseArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    console.log(array[i]);
  }
};
reverseArray(array);
