const Obj = require('./index');
const defaultList = { 
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null,
        }
    } 
};

describe('arrayToList', () => {
   it('should return a list in a node structure', () => {
        expect(Obj.arrayToList([1, 2, 3])).toEqual(defaultList);
   }) 
});

describe('listToArray', () => {
    it('should return an array given a node list', () => {
        expect(Obj.listToArray(defaultList)).toEqual([1, 2, 3]); 
    });
   });

describe('prepend', () => {
   it('should add a new element to the begining of the node list', () => {
        expect(Obj.prepend(4, defaultList)).toEqual({
            value: 4,
            rest: {
                ...defaultList,
            },
        });
   });
});

describe('nth', () => {
   it('should return back the nth element of the list', () => {
    expect(Obj.nth(defaultList, 1)).toEqual(2);
   });
})

