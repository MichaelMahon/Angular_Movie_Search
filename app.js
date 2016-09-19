var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('html'));
app.use(express.static('js'));
app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('build'));

app.get('/', function (req, res) {


});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});