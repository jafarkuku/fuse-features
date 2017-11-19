const path = require('path');
const express = require('express');
const router = express.Router();
const ocado = require('./routes/ocado');

const app = express();
app.set('view engine', 'ejs');
app.use('/ocado', ocado);

app.get('/', (req, res) => {
  res.render('pages/index', {
    content : "Index Page"
  });
});

app.use(express.static(path.join('./client','dist')));

const startServer = config =>
  app.listen(config.port , () =>
    console.log("Listening on port " + config.port)
  )

module.exports.startServer = startServer;
