const express = require('express');
const router = express.Router();

// Root
router.get('/', (request, response) => {
    response.sendStatus(200);
});

router.post('/', (request, response) => {
    response.redirect(`/search=undefined`);
});

router.get('/search=:query', (request, response) => {
    response.sendStatus(200);
});


module.exports = router;
