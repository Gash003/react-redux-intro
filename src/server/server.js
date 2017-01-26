const express = require('express');
const path = require('path');

const app = express();
const userList = require('./data/users.json');
const widgetList = require('./data/widgets.json');

const publicPath = path.join(__dirname, '..', 'client', 'public');
const indexFile = path.join(__dirname, '..', 'client', 'index.html');

app.use(express.static(publicPath, {
  dotfiles: 'ignore',
  index: false
}));


app.get('/users', function(req, res) {
  res.json(userList);
});

app.get('/widgets', function(req, res) {
  res.json(widgetList);
});

app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl);
  res.sendFile(indexFile);
});


const port = 3000;
app.listen(port);

console.log('Serving: localhost:' + port);
