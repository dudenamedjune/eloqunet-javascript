const borrowed = require('./')
describe('Borrowing a method', () => {
   it('checks to see if it has own property', () => {
    expect(Object.prototype.hasOwnProperty.call(map, hasOwnProperty)).toEqual(true);
   });
})
