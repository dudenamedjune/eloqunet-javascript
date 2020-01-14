const reverseArray = (array) => {
    const lastIndex = array.length - 1;
    let counter = lastIndex;
    let reversed = [];
    while(counter >= 0) {
        reversed[lastIndex - counter] = array[counter];
        counter -= 1;
    }   
    return reversed;
};

const reverseArrayInPlace = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
      }
      return array; 
};

module.exports = {
    reverseArray,
    reverseArrayInPlace,
}