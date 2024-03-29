// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(function (req, res, next) {
    if (req.secure) {
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    };
    res.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
    next();
});

// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
 res.render('pages/index.ejs');
});

// map page
app.get('/map', function(req, res) {
    res.render('pages/map.ejs');
});


// contact page
app.get('/contact', function(req, res) {
 res.render('pages/contact.ejs');
});

// transport page
app.get('/transport', function(req, res) {
    res.render('pages/transport.ejs');
});

// events page
app.get('/events', function(req, res) {
    res.render('pages/events.ejs');
});

// info page
app.get('/info', function(req, res) {
    res.render('pages/info.ejs');
});

// treasure hunt page
app.get('/treasure', function(req, res) {
    res.render('pages/treasure.ejs');
});

// ar page
app.get('/ar', function(req, res) {
    res.render('pages/ar.ejs');
});

// winter gardens map page
app.get('/wgmap', function(req, res) {
    res.render('pages/wintergardensmap.ejs');
});

// gallery page
app.get('/gallery', function(req, res) {
    res.render('pages/gallery.ejs');
});

// weather page
app.get('/weather', function(req, res) {
    res.render('pages/weather.ejs');
});

app.listen(8080);
console.log('8080 is the magic port'); 