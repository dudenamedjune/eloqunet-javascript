const deepEqual = (a, b) => {
    if(typeof a === 'object' && a !== null && typeof b === 'object' && b !== null){
       return !Object.keys(a).map(key => deepEqual(a[key], b[key])).flat().some((v) => v === false);
        
    } 
    if(a === b || a === null && b === null) {
        return true;
    }
    return false;
};

module.exports = deepEqual;