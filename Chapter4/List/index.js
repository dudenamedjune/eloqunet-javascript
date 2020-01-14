const arrayToList = (array) => 
    array.reverse().reduce((accum, curr, index) => ( 
        {
            value: curr,
            rest: index === 0 ? null : {
                ...accum
            },
        })
    , {});

const listToArray = (list) => {
   let rest = list.rest;
   let array = [list.value];
   while(rest) {
        array = [...array, rest.value];
        rest = rest.rest;
   } 
   return array;
};

const prepend = (element, list) => ({
    value: element,
    rest: {
        ...list,
    },  
});

const nth = (list, n) => {
    if(!n) return list.value;   
    return nth(list.rest, n - 1);
}

module.exports = {
    arrayToList,
    listToArray,
    prepend,
    nth,
};