const countChar = require('./');
describe('countChar', () => {
    it('should return back the number of a defined char in a string', ()=> {
        [['abba', 'a', 2], ['$$&HJK$$j', '$', 4]].map(([
            arg1, 
            arg2,
            expected
        ]) => {
            expect(countChar(arg1, arg2)).toEqual(expected);
        })
    });
})
