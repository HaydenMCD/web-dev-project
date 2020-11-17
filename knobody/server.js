const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

var data = require('./quotes.json');

app.use(express.static('files'));

app.get('/quotes',(req, res) => {
  res.send(data);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })