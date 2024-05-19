const utils = require("./utils");
describe("utils", () => {
  it("should add two numbers", () => {
    const res = utils.add("test", 10);
    switch (res) {
      case res !== 30:
        throw new Error(`Expected 30 but got ${res}`);
      case typeof res !== "number":
        throw new Error(`Expected a number but output is ${typeof res}`);
      default:
        break;
    }
  });
});
