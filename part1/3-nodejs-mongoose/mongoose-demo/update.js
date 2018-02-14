var models = require("./models");

const applicant = models.ApplicantSchema;

var newData = {
	name: "Kurnia Jaya Abadi",
	address: "Leles, Garut",
	email: "kurnia.jaya@gmail.com",
	jobs_position: "Mobile Application Developer",
	skills: [
		"Android",
		"React-Native",
		"Xamarin",
		"iOS"
	],
	contacts: [
		{ type: "phone", order: 1, value: "7507722"},
		{ type: "mobile phone", order: 2, value: "085723457233"},
		{ type: "mobile phone", order: 3, value: "085723457255"},
	]
};

applicant.update({"name": "Kurnia Jaya"}, newData).then((row) => {
	console.log(row);
	console.log("Update success!");
}).catch((err) => {
	console.log(err);
})