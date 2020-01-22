const Group = require('./');

describe('Group', () => {
   it('adds a value to the group if it isnt present', () => {
        const test = new Group();
        test.add(1);
        test.add(1);
        expect(test.set).toEqual([1]);
    });

    it('removes a value to the group', () => {
        const test = new Group();
        test.add(1);
        test.add(2);
        test.delete(2)
        expect(test.set).toEqual([1]);
    });
    it('removes a value to the group', () => {
        const test = new Group();
        test.add(1);
        test.add(2);
        expect(test.has(2)).toEqual(true);
    });

    it('returns true if it has a value', () => {
        const test = new Group();
        test.add(1);
        test.add(2);
        expect(test.has(2)).toEqual(true);
    });

    it('returns false if it doesnt have a value', () => {
        const test = new Group();
        test.add(1);
        test.add(2);
        expect(test.has(3)).toEqual(false);
    });

    it('creates values from an iterable object', () => {
        const test = Group.from([1, 2, 3, 2, 4, 5, 6, 7]);
        expect(test.has(3)).toEqual(true);
        expect(test.set).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});
