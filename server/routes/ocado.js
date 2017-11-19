const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/search', {
    content : "Index Page"
  });
});

router.get('/search-widget', (req, res, next) => {
  res.send('Hello Ocado Search Widget')
});

module.exports = router;
