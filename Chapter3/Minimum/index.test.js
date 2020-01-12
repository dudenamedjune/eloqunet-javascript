const min = require('./');; 
describe('Minimum', () => {
	it('should return back the smallest number', () => {
		expect(min(1, 5)).toEqual(1);
	});
});
