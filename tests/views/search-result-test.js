const should = require("chai").should();
const supertest = require("supertest");
const api = supertest("http://localhost:3000");


describe('View search result ', () => {
    context('When search "the"', () => {
        it('should render search results in <li>', (done) => {
            api
                .get('/search=the')
                .expect('Content-Type', /html/)
                .expect(200)
                .end(function(error, response) {
                    if (error) return done(err);
                    should.not.exist(error);
                    response.text.should.match(/<li>/);
                    response.text.should.match(/the/);
                    done();
                });
        });
    })

    context('When search "weather"', () => {
         it('should render "A British History in Weather"', (done) => {
             api
                 .get('/search=the')
                 .expect('Content-Type', /html/)
                 .expect(200)
                 .end(function(error, response) {
                     if (error) return done(err);
                     should.not.exist(error);
                     response.text.should.match(/<li>/);
                     response.text.should.match(/A British History in Weather/);
                     done();
                 });
         });
     })
});
