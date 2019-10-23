var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var port    = process.env.PORT || 3000;


server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
