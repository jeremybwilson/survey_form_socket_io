const express = require('express');
const router = express.Router();

/* GET  => Counter home page. */

router.get('/', (request, response) => {
    console.log('getting to index');
    response.render('index', { title: 'Survey Form home page' });
});

module.exports = router;