const express = require('express');
const router = express.Router();
const request = require('request');

const ocadosaurus = require('../api/ocado/ocadosaurus.json');

const config = {
  url: "https://fusion-universal-assets-production.s3.amazonaws.com/file-host/92cd3e3f-dcc1-48d0-bca6-eefb1b6d01f0--3672403217049507807-732/597/ocadosaurus.json",
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-client'
  }
};

router.get('/', (req, res) => {
  res.render('pages/search', {
    content : "Index Page"
  });
});

router.get('/api/ocadosaurus', (req, res) => {
  request(config, (err, output, body) => {
    var json = JSON.parse(body);
    console.log(json);
    res.json(json)
  });
});

module.exports = router;
