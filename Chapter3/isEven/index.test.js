const isEven = require('./');
describe('isEven', () => {
	it('should return back an true when passed an even number', () => {
		expect(isEven(22)).toEqual(true);
	});
});
