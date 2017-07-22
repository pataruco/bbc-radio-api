const assert = require("chai").assert;
const Search = require('../../controllers/helper/search');

describe('Helper Search ', () => {

    const search = new Search('the');

    describe('instantiation', () => {
        it('should return an array', (done) => {
            assert.isArray(search);
            done();
        });
    });


});
