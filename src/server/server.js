const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'public'), {
  dotfiles: 'ignore',
  index: false
}));


app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl);

  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});


const port = 3000;
app.listen(port);

console.log('Serving: localhost:' + port);
