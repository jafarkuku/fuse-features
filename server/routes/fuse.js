const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/fuse', {
    content: 'Index Page',
  });
});

module.exports = router;
