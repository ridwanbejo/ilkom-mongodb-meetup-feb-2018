const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://sense-therapy:secret12345@192.168.99.100:32773/therapy');

var ApplicantSchema = mongoose.model('Applicant', new Schema({ 
		name: String,
		address: String,
		email: String,
		jobs_position: String,
		skills: Array,
		contacts: Array //{ type: "phone", order: 1, value: "7501234"}
	})
);


module.exports  = {
	ApplicantSchema
}