const Obj = require('./index');
describe('range', () => {
   it('should create an array of numbers given a range of two paramters including both', () => {
    expect(Obj.range(4,8)).toEqual([4, 5, 6, 7, 8]);
   });

    it('should create an array of numbers given a range of two paramters and incremented step for a third paramter', () => {
       expect(Obj.range(1,10, 2)).toEqual([1, 3, 5, 7, 9]) 
    });

    it('should create an array of numbers given a range of two paramters and incremented step for a third paramter', () => {
        expect(Obj.range(10, 1, -2)).toEqual([9, 7, 5, 3, 1]); 
     });
     it('should return back the first arg when step is outside of the second arg', () => {
        expect(Obj.range(10, 1, -10)).toEqual([10]); 
     });
     it('should return back the first arg when step is outside of the second arg', () => {
        expect(Obj.range(1, 5, 10)).toEqual([1]); 
     });
     it('should return back null when the args dont make sense', () => {
        expect(Obj.range(1, 10, -10)).toEqual(null); 
     });
});

describe('sum', () => {
    it('should add up all of the values in an array',() => {
    expect(Obj.sum(Obj.range(1,10))).toEqual(55);
   }) 
});