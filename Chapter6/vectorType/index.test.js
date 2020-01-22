const Vec = require('./');

describe('Vec', () => {
    it('should add a new vector to itself', () => {
            expect(new Vec(5, 5).plus(new Vec(5, 5))).toEqual({"x": 10, "y": 10});
        });

      it('should subtract a new vector to itself', () => {
            expect(new Vec(10, 5).minus(new Vec(5, 5))).toEqual({"x": 5, "y": 0});
        });

        it('should calculate its own distance from origin (0,0)', () => {
            expect(new Vec(3, 4).length).toEqual(5);
        });
})
