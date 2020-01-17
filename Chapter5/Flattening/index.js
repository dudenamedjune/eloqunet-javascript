const flatten = (array) => array.reduce((accum, curr) => {
    if(Array.isArray(curr)) {
        return [...accum, ...flatten(curr)];
    };
    return [...accum, curr];
}, []);


module.exports = {
    flatten,
}