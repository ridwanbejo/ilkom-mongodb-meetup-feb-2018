var kue = require('kue')
  , jobs = kue.createQueue({
		  redis: {
		    port: 32780,
		    host: '192.168.99.100',
		  }
		});


var express = require('express');
var bodyParser = require("body-parser");
var path    = require("path");

var app = express();

// web apps

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
	console.log("Welcome!");

	res.send("Welcome!");
});

app.get("/login", function(req, res) {
	console.log("Login!");

	res.sendFile(path.join(__dirname+'/sample.html'));
});

app.post("/store_clickstream", function(req, res) {
	console.log("Store Clickstream!");
	
	console.log(req.body);

	jobs.create( 'clickstream_log', {
	  	url: req.body.url,
		mouse_position_x: req.body.mouse_position_x,
		mouse_position_y: req.body.mouse_position_y,
		selectedElementID: req.body.selectedElementID,
		selectedElementClass: req.body.selectedElementClass
	}).save();

	res.json({"message":"ok"});
});

app.listen(3000, () => {
	console.log('listening on 3000')
})

// Producer for jobs testing

// for ( var i = 0; i < 100; i++ ) {
// 	console.log( 'Creating Clickstream Log Job #' + i );

// 	jobs.create( 'clickstream_log', {
// 	  	url: "http://localhost/index.php/login",
// 		mouse_position_x: 300,
// 		mouse_position_y: 400,
// 		selectedElementID: "f-login-username-field",
// 		selectedElementClass: "username-field"
// 	}).save();
// }
