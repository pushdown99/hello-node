var express = require('express');
var path    = require('path');
var app     = express();
var cors    = require('cors');
var server  = require('http').createServer(app);
var port    = process.env.PORT || 3000;


server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
  res.render('index');
})

