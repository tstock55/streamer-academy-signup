const express = require('express');
var path = require('path');

let app = express();
let port = process.env.PORT || 8080;

app.use("/public", express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
	
})

app.get('/', function(req, res) {
	console.log(req.url);
	res.sendFile(__dirname + '/index.html');
	res.status(200);
})
