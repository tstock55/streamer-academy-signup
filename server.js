const express = require('express');

let app = express();

app.listen(3000, function() {
	console.log("listening on 3000");
})

app.get('/', function(req, res) {
	console.log(req.url);
	res.sendFile(__dirname + '/index.html');
	res.status(200);
})

app.get('/bootstrap-3.3.7-dist/css/bootstrap.min.css', function(req, res) {
	console.log(req.url);
	res.sendFile(__dirname + '/bootstrap-3.3.7-dist/css/bootstrap.min.css');
	res.status(200);
})

app.get('/styles/css/landing-styles.css', function(req, res) {
	res.sendFile(__dirname + '/styles/css/landing-styles.css');
})

app.get('/styles/images/audience-bg.jpeg', function(req, res) {
	res.sendFile(__dirname + '/styles/images/audience-bg.jpeg');
})