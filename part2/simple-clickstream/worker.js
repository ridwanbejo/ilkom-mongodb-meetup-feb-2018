var kue = require('kue')
	, cluster = require('cluster')
  	, jobs = kue.createQueue({
		  redis: {
		    port: 32770,
		    host: '192.168.99.100',
		  }
		});

var mongoose = require('mongoose');
var models = require("./models");
const ClickStreamLog = models.ClickstreamLog;

var clusterWorkerSize = require('os').cpus().length;

if (cluster.isMaster) {

  	// start the UI
	kue.app.listen( 3001 );
	console.log( 'UI started on port 3001' );

	for (var i = 0; i < clusterWorkerSize; i++) {
	    cluster.fork();
	}

} else {

	// Consumer / Worker for jobs testing

	jobs.process( 'clickstream_log', 10, function ( job, done ) {

	  	console.log("Start to execute clickstream_log jobs...");

	 	var clickstream_log = new ClickStreamLog({
						url: job.data.url,
						mouse_position_x: job.data.mouse_position_x,
						mouse_position_y: job.data.mouse_position_y,
						selectedElementID: job.data.elemID,
						selectedElementClass: job.data.elemClass
					});

		clickstream_log.save(function(err) {
			if (err)
			{
				console.log(err);
			}
			else
			{
				setTimeout( function () {
					console.log( 'Storing clickstream_log is finish: ' + job.data.url );
					done();
			  	}, 100 );
			}
		});

	});
}