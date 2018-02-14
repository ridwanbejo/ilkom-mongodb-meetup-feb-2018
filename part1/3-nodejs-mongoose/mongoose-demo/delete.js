var models = require("./models");

const applicant = models.ApplicantSchema;

applicant.findByIdAndRemove("5a83da258be83609859423f9").then((rows) => {
	console.log(rows);
	console.log("Delete success!");
	process.exit(0);
}).catch((err) => {
	console.log(err);
})