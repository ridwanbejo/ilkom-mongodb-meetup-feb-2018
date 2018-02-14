var models = require("./models");

var applicant = new models.ApplicantSchema({name: "Ridwan Fadjar Septian",
	address: "Ciwastra, Bandung",
	email: "gilang.ahmad@gmail.com",
	jobs_position: "Frontend Web Developer",
	skills: [
		"PHP",
		"Javascript",
		"Angular.js",
		"React.js",
		"Gulp",
		"React-Router",
		"jQuery"
	],
	contacts: [
		{ type: "phone", order: 1, value: "7501234"},
		{ type: "mobile phone", order: 2, value: "085723457214"},
		{ type: "phone", order: 3, value: "7502255"}
	]});

applicant.save().then((row) => {
	console.log(row);
	console.log("Insert success!");
}).catch((err) => {
	console.log(err);
})

applicant = new models.ApplicantSchema({
		name: "Kurnia Jaya",
		address: "Leles, Garut",
		email: "kurnia.jaya@gmail.com",
		jobs_position: "Mobile Application Developer",
		skills: [
			"Android",
			"React-Native",
			"Xamarin"
		],
		contacts: [
			{ type: "phone", order: 1, value: "7507722"},
			{ type: "mobile phone", order: 2, value: "085723457233"},
			{ type: "mobile phone", order: 3, value: "085723457255"},
		]
	});

applicant.save().then((row) => {
	console.log(row);
	console.log("Insert success!");
}).catch((err) => {
	console.log(err);
})