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

const dataWithoutImage = {
    "title": "A Bit of Fry and Laurie",
    "slice_title": "abitoffryandlaurie",
    "letter": "a",
    "programme": {
        "type": "brand",
        "pid": "p03ccxr2",
        "title": "A Bit of Fry and Laurie",
        "short_synopsis": "Stephen Fry and Hugh Laurie's eccentric sketch show.",
        "position": null,
        "expected_child_count": null,
        "first_broadcast_date": null,
        "is_available": true
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

        it('should return synopsis', (done) => {
            assert.equal(programme.synopsis, data.programme.short_synopsis);
            done();
        });

        it('should return image string', (done) => {
            let pid = data.programme.image.pid;
            let imageString = `https://ichef.bbci.co.uk/images/ic/480x270/${pid}.jpg`
            assert.equal(programme.image, imageString);
            done();
        });

        describe('when image pid is not provided', () => {
            it('should return an image placeholder', (done) => {
                let programmeTwo = new Programme(dataWithoutImage);
                assert.equal(programmeTwo.image, 'http://via.placeholder.com/480x270');
                done();
            });
        });

    });
});
