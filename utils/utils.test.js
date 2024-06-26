const expect = require("expect");
const utils = require("./utils");
describe("utils", () => {
  it("Should add two numbers", () => {
    const res = utils.add(20, 10);
    expect(res).toEqual(30).toBeA("number");
  });
  it("Should square a number", () => {
    const res = utils.square(10);
    expect(res).toEqual(100).toBeA("number");
  });
  it("Should divide two numbers", () => {
    const res = utils.divide(10, 2);
    expect(res).toEqual(5).toBeA("number");
  });
  it("Should expand an object", () => {
    const b = {
      test2: 2,
    };
    const res = utils.expandObject(b);
    expect(res).toBeA("object").toEqual({ test: 1, test2: 2 });
  });
});
describe("More complex tests", () => {
  it("Should remove an item from an array", () => {
    const array = [1, 2, 3, 4, 5];
    const item = 2;
    const res = utils.removeItemFromArray(array, item);
    expect(res).toBeA("array").toEqual([1, 3, 4, 5]);
  });

  it("Should add two numbers but then from an async function", (done) => {
    utils.asyncAdd(5, 10, (sum) => {
      expect(sum).toBe(15).toBeA("number");
      done();
    });
  });
  it("Should square a number but then from an async function", (done) => {
    utils.asyncSquare(5, (square) => {
      expect(square).toBe(25).toBeA("number");
      done();
    });
  });
});
