// to clean up the data structure
class Programme {
    // get raw data
    constructor(data) {
        let programme = {
            title: this.getTitle(data)
        }
        return programme;
    }

    getTitle(data) {
        return data.programme.title;
    }
}

module.exports = Programme;
