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
    let b = {
      test2: 2,
    };
    const res = utils.expandObject(b);
    expect(res).toBeA("object").toEqual({ test: 1, test2: 2 });
  });
});
