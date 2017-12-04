const path = require('path');

const express = require('express');

const ocado = require('./routes/ocado');
const fuse = require('./routes/fuse');

const app = express();
app.set('view engine', 'ejs');
app.use('/ocado', ocado);
app.use('/fuse', fuse);

app.get('/', (req, res) => {
  res.render('pages/index', {
    content: 'Index Page',
  });
});

app.use(express.static(path.join('./client', 'dist')));

const startServer = config =>
  app.listen(config.port, () =>
  // eslint-disable-next-line no-console
    console.log(`Listening on port ${config.port}`));

module.exports.startServer = startServer;
