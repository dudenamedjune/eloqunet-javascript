const dominantDirection = require('./');
describe('dominantDirection', () => {
   it('should return back rtl', () => {
    expect(dominantDirection("Hello!")).toEqual('ltr');
    }); 

    it('should return back ltr', () => {
        expect(dominantDirection("Hey, مساء الخير")).toEqual('rtl');
    });
})
