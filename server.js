var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(path.join(__dirname, './client')));
app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  console.log("Port 3000, for Angular Map");
})
