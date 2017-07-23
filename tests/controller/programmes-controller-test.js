const expect = require("chai").expect;
const assert = require("chai").assert;
const supertest = require("supertest");
const api = supertest("http://localhost:3000");

describe("Controller Programme", () => {

    describe("GET /", () => {
        it("should return a 200 response", (done) => {
            api
                .get("/")
                .expect(200, done);
        });
    });
    
    describe("POST /", () => {
        it("should return redirect to /search=:query", (done) => {
            api
                .post("/")
                .expect(302)
                .expect('Location', '/search=undefined', done);
        });
    });
});
