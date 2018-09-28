const express = require('express');
const path = require('path');
const app = express();

/*LiveReaload section*/
var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/public");

/**
	Make the folder "public" a static asset folder.
*/
app.use('/', express.static(path.join(__dirname, 'public')));

/*Start the server*/
app.listen(80);
console.log('JumpittFrontEndTets Running at port 80...');