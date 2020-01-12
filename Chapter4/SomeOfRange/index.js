const createRangeArray = (a, b, step) => {
    let counter = a; 
    let rangeArray = [];

    while(counter <= b) {
        rangeArray.push(counter);
        counter += step;
    
    }

    return rangeArray;
}

const range = (a, b, step = 1) => {
    let convertedStep = step > 0 ? step : step * -1;
    if(a < b && ((a + step) > a)) {
        return createRangeArray(a, b, step);
    } else if(a > b && ((convertedStep + b) > b)) {
        const rangeArray = createRangeArray(b, a, convertedStep).reverse();
        return rangeArray.length === 1 ? [a] : rangeArray; 
    } else if(a === b){
        return [a];
    }     
    return null;
};

const sum = (values) => values.reduce((accum, curr) => accum += curr, 0); 
    
module.exports = {
    range,
    sum,
};