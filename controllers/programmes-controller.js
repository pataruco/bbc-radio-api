const express = require('express');
const router = express.Router();
const Search = require('./helper/search');

// Root
router.get('/', (request, response) => {
    response.render('search');
});

router.post('/', (request, response) => {
    let searchString = request.body.search;
    response.redirect(`/search=${searchString}`);
});

router.get('/search=:query', (request, response) => {
    let query = request.params.query
    let searchResults = new Search(query);
    response.render('search-results', { searchResults } );
});

router.get('/suggest=:query', (request, response) => {
    response.send(  [ ] );
});


module.exports = router;
