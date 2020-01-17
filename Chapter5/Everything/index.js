const everyLoop = (array, test) => {
   for(x of array) {
        if(!test) return false;
   } 
   return true;
};

const some = (array, test) => !array.some((v) => !test(v, array));

module.exports = {
    everyLoop,
    some,
};