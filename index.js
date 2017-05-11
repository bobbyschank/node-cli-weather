//Bonus: take in state and city as arguments instead of hardcoding
var state = "CO";
var city = "Denver";

//Require apiKey
const keyauth = require("./env.js");

//Require the request library
var request = require('request');

//What is the `request` library you ask?

//Google `npm request` and you can find out!


// Set the API URL we are hitting, with our API Key, state, and city
function weatherData(req, res) {
// current conditions by name
//request('http://api.wunderground.com/api/' + keyauth + '/conditions/q/CO/Denver.json', function (error, response, body) {

// current moon phase and sunset/sunrise by name
request('http://api.wunderground.com/api/' + keyauth + '/astronomy/q/CO/Denver.json', function (error, response, body) {

// 4 day forecast																		lat			long
//request('http://api.wunderground.com/api/' + keyauth + '/forecast/q/43.653436,-110.715088.json', function (error, response, body) {

//hourly forecast
//request('http://api.wunderground.com/api/' + keyauth + '/hourly/q/43.653436,-110.715088.json', function (error, response, body) {
	console.log('error:', error);
	console.log('statusCode:', response && response.statusCode);
	// console.log('body:', body);
	var parseBody = JSON.parse(body);

	console.log(parseBody);

	//4 day forecast query
	//console.log(parseBody.forecast.txt_forecast);
	
	//hourly forecast query
	//console.log(parseBody.hourly_forecast);

	//console.log("The weather in Denver is " + parseBody);
	//return "The weather in Denver is " + parseBody.current_observation.weather;
	//res.json(test);
});
}

function moonData(req, res) {
	//one day moon data
	request('http://api.usno.navy.mil/rstt/oneday?date=5/9/2017&coords=43.653436,-110.715088', function (error, response, body) {
		var parseBody = JSON.parse(body);

		console.log(parseBody);
	});
}

//module.exports = weatherData;
module.exports = moonData;
//Send the request

  //Inside the callback

  //Print out the weather result
