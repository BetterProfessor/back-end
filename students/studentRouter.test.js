const server = require("../api/server");
const request = require("supertest");
const db = require("../database/dbConfig");

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

describe("student-router.js", () => {
  describe("GET students", () => {
    it("Returns 200 OK", async () => {
      const formData = {
        username: makeString(5),
        password: "123",
        email: `${makeString(5)}@gmail.com`,
      };
      return request(server)
        .post("/api/register")
        .send(formData)
        .then((res) => {
          return request(server)
            .post("/api/login")
            .send(formData)
            .then((res) => {
              const token = res.body.token;
              console.log(token);
              return request(server)
                .get("/api/students")
                .set("Authorization", token)
                .then((res) => {
                  expect(res.status).toBe(200);
                });
            });
        });
    });
  });
});
