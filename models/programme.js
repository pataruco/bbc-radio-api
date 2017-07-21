// to clean up the data structure
class Programme {
    // get raw data
    constructor(data) {
        let programme = {
            title: this.getTitle(data),
            synopsis: this.getSynopsis(data),
            image: this.getImage(data)
        }
        return programme;
    }

    getTitle(data) {
        return data.programme.title;
    }

    getSynopsis(data) {
        return data.programme.short_synopsis;
    }

    getImage(data) {
        let image = data.programme.image;
        if (image) {
            let pid = data.programme.image.pid;
            return `https://ichef.bbci.co.uk/images/ic/480x270/${pid}.jpg`;
        }
        return 'http://via.placeholder.com/480x270';
    }
}

module.exports = Programme;
