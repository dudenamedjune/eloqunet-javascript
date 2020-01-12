//for practice only, this recursive makes zero sense in the real world 
const isEven = (n) => {
	if(n < 0) return false	
	if(n === 0) return true;
	if(n === 1) return false;
	return	isEven(n - 2);	
}
module.exports = isEven;
