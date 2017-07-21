const should = require("chai").should();
const expect = require("chai").expect;
const assert = require("chai").assert;
const Programme = require('../../models/programme');

const data = {
    "title": "'arse that Jack Built, The",
    "slice_title": "arsethatjackbuiltthe",
    "letter": "a",
    "programme": {
        "type": "episode",
        "pid": "b01ljwm4",
        "title": "The 'arse that Jack Built",
        "short_synopsis": "Ian McMillan goes in search of one of Britain's strangest linguistic features.",
        "image": {
            "pid": "p01hwgzc"
        },
        "position": null,
        "expected_child_count": null,
        "first_broadcast_date": "2012-08-10T11:00:00+01:00",
        "is_available": true,
        "ownership": {
            "service": {
                "type": "radio",
                "id": "bbc_radio_four",
                "key": "radio4",
                "title": "BBC Radio 4"
            }
        }
    }
}

describe('Model Programme', () => {

    const programme = new Programme(data);

    describe('instantiation', () => {

        it('should be an object', (done) => {
            assert.isObject(programme);
            done();
        });
    });

    describe('values', () => {

        it('should return title', (done) => {
            assert.equal(programme.title, data.programme.title);
            done();
        });

    });
});
