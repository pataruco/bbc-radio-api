const assert = require("chai").assert;
const Search = require('../../controllers/helper/suggestion');

describe('Helper Suggestion ', () => {

    const search = new Search('the');

    describe('instantiation', () => {
        it('should return an array', (done) => {
            assert.isArray(search);
            done();
        });
    });

    describe('items', () => {

        it('should no more than 10', (done) => {
            assert.equal(search.length, 10);
            done();
        });

        it('should return programmes objects', (done) => {
            assert.isTrue('title' in search[0]);
            assert.isTrue('image' in search[0]);
            assert.isTrue('synopsis' in search[0]);
            done()
        });
    })

    describe('match', () => {
        describe('an item', () => {
            it('should includes in its title the query string', (done) => {
                assert.isTrue(search[0].title.toLowerCase().includes('the'));
                done();
            })
        })

        describe('a search collection', () => {
            it('should return empty if do not find a match', (done) => {
                const emptySearch = new Search('kjhkjsdkjadkjasd');
                assert.isTrue(emptySearch.length <= 0);
                done();
            });
        });
    });
});
