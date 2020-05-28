const supertest = require("supertest");
const server = require("../api/server");

function makeString(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

describe("POST to /register", () => {
  describe("testing registering and logging in", () => {
    it("return 201 created", function (done) {
      return supertest(server)
        .post("/api/register")
        .send({
          username: makeString(5),
          password: "123",
          email: `${makeString(5)}@gmail.com`,
        })
        .expect(201)
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});
