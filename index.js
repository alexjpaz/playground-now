const express = require('express')
const app = express()

app.use(express.static('public'));


const server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

var Gun = require('gun');

var gun = Gun({
    web: server,
    file: 'data.json'
});

