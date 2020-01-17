const Obj = require('./')
describe('every', () => {
    it('should return true if every value is equal to a', () => {
        expect(Obj.everyLoop(['a', 'a', 'a', 'a'], (v) => v === 'a')).toEqual(true);
    });
    it('should return true and call test 4 times', ()=> {
        const mockTest = jest.fn((v) =>  v < 5);
        expect(Obj.some([1, 2, 3, 4], mockTest)).toEqual(true);
        expect(mockTest).toHaveBeenCalledTimes(4);
    });
})
