const Obj = require('./');

describe('loop', () => {
   it('should call update 4 times', () => {
       const mockTest = jest.fn((v) => v <= 4);
       const mockUpdate = jest.fn((v) => v + 1);
       const mockBody = jest.fn();
       Obj.loop(1, mockTest, mockUpdate, mockBody);
       [1, 2, 3, 4].map((x) => expect(mockTest).toHaveBeenNthCalledWith(x, x));
       [1, 2, 3, 4].map((x) => expect(mockBody).toHaveBeenNthCalledWith(x, x));
       [1, 2, 3, 4].map((x) => expect(mockUpdate).toHaveBeenNthCalledWith(x, x));
   });
})
