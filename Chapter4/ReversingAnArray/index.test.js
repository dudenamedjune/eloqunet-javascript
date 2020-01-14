const Obj = require('./');
describe('reverseArray', () => {
  it('should return an array with its values reversed', () => {
    expect(Obj.reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});

describe('reverseArrayInPlace', () => {
    it('should return an array with its values reversed', () => {
        expect(Obj.reverseArrayInPlace([1, 2, 3, 4 ])).toEqual([4, 3, 2, 1]);
    });
});