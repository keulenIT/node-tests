const request = require("supertest");

let app = require("./server").app;
const expect = require("expect");

describe("Server tests", () => {
  it("Should return the correct text when calling GET on /", (done) => {
    request(app).get("/").expect(200).expect("Hello world!").end(done);
  });
  it("Should return the correct error when calling GET with id on /", (done) => {
    request(app).get("/?id").expect(404).expect("Wrong path").end(done);
  });
  it("Should return the correct error when calling GET on /about", (done) => {
    request(app)
      .get("/about")
      .expect(404)
      .expect({ error: "Page doesn't exist" })
      .end(done);
  });
  it("Should include the correct usernames", (done) => {
    request(app)
      .get("/users")
      .expect((res) => {
        expect(res.body).toInclude({ name: "Mathias", id: "1" });
      })
      .end(done);
  });
});
