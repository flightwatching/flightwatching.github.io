"use strict";


var jsonRefreshMin = 60;//1 hour
var minute = 60*1000;//1 minutes (in ms)

var getSampleCount = function() {
	$.getJSON(
		"https://shared.flightwatching.com/public/metrics/samples.json",
		function( data ) {
			for (var i = 0; i < 10*jsonRefreshMin; i++) { //loop 10 times a minute
				setTimeout(
					function(val) {
						$(".odometer").html(val);
					},
					6000*i, // each 6 seconds
					Math.floor(+data.prev+(+data.next-data.prev)*i/(10*jsonRefreshMin)));
			}
		});
}

$(document).ready(function(){
	getSampleCount();
	setInterval(getSampleCount, jsonRefreshMin*minute);
});
