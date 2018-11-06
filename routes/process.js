const express = require('express');
const router = express.Router();

/* POST => Survey form process route */
router.post('/', (request, response) => {
    console.log('getting to process');
    console.log('form data submitted', request.body);
    // response.render('index', { title: 'Counter' });
    results = request.body;
    console.log('results array updated to: ', results);
    response.redirect('/result');  	
});


module.exports = router;