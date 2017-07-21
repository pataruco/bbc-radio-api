// to clean up the data structure
class Programme {
    // get raw data
    constructor(data) {
        let programme = {
            title: this.getTitle(data),
            synopsis: this.getSynopsis(data)
        }
        return programme;
    }

    getTitle(data) {
        return data.programme.title;
    }

    getSynopsis(data) {
        return data.programme.short_synopsis;
    }
}

module.exports = Programme;
