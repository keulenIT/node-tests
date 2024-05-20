const utils = require("./utils");
describe("utils", () => {
  it("should add two numbers", () => {
    const res = utils.add(20, 10);
    switch (res) {
      case res !== 30:
        throw new Error(`Expected 30 but got ${res}`);
      case typeof res !== "number":
        throw new Error(`Expected a number but output is ${typeof res}`);
      default:
        break;
    }
  });
  it("square add two numbers", () => {
    const res = utils.square(10);
    switch (res) {
      case res !== 100:
        throw new Error(`Expected 100 but got ${res}`);
      case typeof res !== "number":
        throw new Error(`Expected a number but output is ${typeof res}`);
      default:
        break;
    }
  });
});
