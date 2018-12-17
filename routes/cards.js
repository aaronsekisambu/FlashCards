const express = require('express');
const router = express.Router(); 


router.get('/', (req, res) => {
    res.render('card', {prompt: 'Whos is burried in grands tomb?', hint: 'Think about whose tomb it is.'});
});

module.exports = router;        