const countChar = (string, charToFind) => string.split('').reduce((accum, curr) => {
    if(curr === charToFind) accum +=1;
    return accum;
}, 0)



module.exports = countChar;