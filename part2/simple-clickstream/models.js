const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://sense-therapy:secret12345@192.168.99.100:32769/therapy');

var clickstreamLogSchema = new Schema({ 
		url: String,
		mouse_position_x: String,
		mouse_position_y: String,
		selectedElementID: String,
		selectedElementClass: String,
		createdAt: Date
	});

clickstreamLogSchema.pre('save', function(next) {
  var currentDate = new Date();
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var ClickstreamLog = mongoose.model('ClickstreamLog', clickstreamLogSchema);

module.exports  = {
	ClickstreamLog
}