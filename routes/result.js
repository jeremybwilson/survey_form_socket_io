const express = require('express');
const router = express.Router();

/* GET  => Survey results page. */
router.get('/', (request, response) => {
    // results = request.body;
    console.log('getting to results', results);
    response.render('result', { name: results.name, location: results.location, language: results.language, comment: results.comment, title: 'Results page' });
});

module.exports = router;