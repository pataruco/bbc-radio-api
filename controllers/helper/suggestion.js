//fetch Search class
const Search = require('./search');

// extends search class
class Suggestion extends Search {

    constructor( query ) {
        // inheritance from Search
        super( query );

        let programmes = this;

        // return an array of 10 programmes or less
        if (programmes.length > 10) {
            let sliceProgrammes = programmes.slice(0, 10);
            return sliceProgrammes;
        }
        return programmes;
    }
}

module.exports = Suggestion;
