var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/api/posts', function (req, res) {
  res.json([
    {
      username: 'webchick',
      body: 'woohoo'
    }
  ]);
});

app.listen(3000, function () {
  console.log('Server listeing on', 3000);
});
