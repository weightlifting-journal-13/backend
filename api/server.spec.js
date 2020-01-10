const request = require("supertest");

const server = require("./server.js");

describe("server.js", function() {
  describe("GET /", function() {
    it("should return status code 200", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return {message: 'Base server is up and running'}", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.message).toBe("Base server is up and running");
        });
    });
  });
});
