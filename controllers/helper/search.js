// fetch raw data
const data = require('../../data/programmes.json');
// fetch Programme template (model)
const Programme = require('../../models/programme');

class Search {
    constructor(query) {
        // get array of programmes from raw data
        this.programmes = data.atoz.tleo_titles;
        return this.getProgrammesData(query)
    }

    //filter raw data by query and return a new array
    getProgrammesData(query) {
        let programmesData = this.programmes.filter((programme) => {
            return programme.title.toLowerCase().includes(query.toLowerCase());
        });
        return this.getProgrammes(programmesData);
    }

    // return a new array from filter raw data and return a new array with programmes objects
    getProgrammes(programmesData) {
        let programmes = programmesData.map((programmeData) => {
            return new Programme(programmeData);
        })

        return programmes;
    }
}

module.exports = Search;
