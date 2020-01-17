const Obj = require('./')
describe('flatten', () => {
    it('should return back a flat array given a dimensional one', () => {
       expect(Obj.flatten([1, [2, 3], 4, [5, 6, [7, [8]]]])).toEqual([1, 2, 3, 4, 5, 6, 7,8]); 
    });
});
