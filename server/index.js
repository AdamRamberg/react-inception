const path = require('path');
const express = require('express');
const argv = require('../common/argv');

const port = argv.port || 5000;

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(
  '/sub-app-one',
  express.static(path.join(__dirname, '../sub-app-one', 'dist')),
);

// Start your app.
app.listen(port, null, async err => {
  if (err) {
    console.error('Error starting server...');
  } else {
    console.log('Server started...');
  }
});
