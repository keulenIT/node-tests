const request = require("supertest");

let app = require("./server").app;
describe("Server tests", () => {
  it("Should return the correct text when calling GET on /", (done) => {
    request(app).get("/").expect(200).expect("Hello world!").end(done);
  });
  it("Should return the correct error when calling GET with id on /", (done) => {
    request(app).get("/?id").expect(404).expect("Wrong path").end(done);
  });
});
