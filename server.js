'use strict'
const http = require('http');
const PORT =3000;
const importWeather = require("./index.js");

const server = http.createServer(importWeather);

server.listen(PORT, function() {
	console.log("listening on port", PORT);
});