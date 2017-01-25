const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexFile = path.resolve(__dirname, '..', 'client', 'index.html');

app.use(express.static(publicPath, {
  dotfiles: 'ignore',
  index: false
}));


app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl);
  res.sendFile(indexFile);
});


const port = 3000;
app.listen(port);

console.log('Serving: localhost:' + port);
