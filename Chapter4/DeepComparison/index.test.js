const deepEqual = require('./');
describe('deepEqual', () => {
    it('takes two values and returns true only if they are the same value or objects with the same properties', () => { 
        expect(deepEqual(1, 1)).toEqual(true);
        expect(deepEqual({ v: 1, r: {
            v: 2,
            r: {
                v: 3,
                r: null
            }
        }}, { v: 1, r: {
            v: 2,
            r: {
                v: 3,
                r: null
            }
        }})).toEqual(true);
    });
    it('takes two values and returns true only if they are the same value or objects with the same properties', () => { 
        expect(deepEqual(1, 1)).toEqual(true);
        expect(deepEqual({ v: 1, r: {
            v: 2,
            r: {
                v: 3,
                r: null
            }
        }}, { v: 1, r: {
            v: 2,
        }})).toEqual(false);
    });
})
