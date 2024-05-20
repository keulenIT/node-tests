const utils = require("./utils");
describe("utils", () => {
  it("Should add two numbers", () => {
    const res = utils.add(20, 10);
    if (res !== 30) {
      throw new Error(`Expected 30 but got ${res}`);
    }
  });
  it("Should square a number", () => {
    const res = utils.square(10);
    if (res !== 100) {
      throw new Error(`Expected 100 but got ${res}`);
    }
  });
  it("Should divide two numbers", () => {
    const res = utils.divide(10, 2);
    if (res !== 5) {
      throw new Error(`Expected 5 but got ${res}`);
    }
  });
});
