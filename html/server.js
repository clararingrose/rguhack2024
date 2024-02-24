// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
 res.render('pages/index.ejs');
});


// about page
app.get('/map', function(req, res) {
 res.render('pages/map.ejs');
});

// transport page
app.get('/transport', function(req, res) {
    res.render('pages/transport.ejs');
   });

   // transport page
app.get('/transport', function(req, res) {
    res.render('pages/transport.ejs');
   });

app.listen(8080);
console.log('8080 is the magic port'); 