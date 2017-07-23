const express = require('express');
const router = express.Router();
const Search = require('./helper/search');
const Suggestion = require('./helper/suggestion');

// Root
router.get('/', (request, response) => {
    response.render('search');
});

// fetch search query and redirect
router.post('/', (request, response) => {
    let searchString = request.body.search;
    response.redirect(`/search=${searchString}`);
});

// render a result page
router.get('/search=:query', (request, response) => {
    //fetch query
    let query = request.params.query
    // get search result
    let searchResults = new Search(query);
    // render results on view
    response.render('search-results', {
        searchResults
    })
});

// end point for XHR request
router.get('/suggest=:query', (request, response) => {
    //fetch query
    let query = request.params.query
    // get suggestions result
    let suggestResults = new Suggestion(query);
    //send result to client
    response.send(suggestResults);
});

module.exports = router;
