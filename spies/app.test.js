const expect = require("expect");
const rewire = require("rewire");
let app = rewire("./app");

describe("App", () => {
  let db = {
    saveUser: expect.createSpy(),
  };
  app.__set__("db", db);
  it("Should call the spy correctly", () => {
    let spy = expect.createSpy();
    spy("mathias", 25);
    expect(spy).toHaveBeenCalledWith("mathias", 25);
  });
  it("Should call saveUser with the user object", () => {
    let email = "testing@keulen.it";
    let password = "password123";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
