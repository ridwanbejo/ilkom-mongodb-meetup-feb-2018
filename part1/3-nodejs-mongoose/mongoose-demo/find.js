var models = require("./models");

const applicant = models.ApplicantSchema;

applicant.find({}).then((rows) => {
	console.log(rows);
	console.log("Find success!");
	process.exit(0);
}).catch((err) => {
	console.log(err);
})