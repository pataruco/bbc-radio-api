const should = require("chai").should();
const supertest = require("supertest");
const api = supertest("http://localhost:3000");


describe('View search', () => {
    it('should have an input form', (done) => {
        api
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end(function(error, response) {
                if (error) return done(err);
                should.not.exist(error);
                response.text.should.match(/<input /);
                done();
            });
    });
});
