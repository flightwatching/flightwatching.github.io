"use strict";


var getSampleCount = function() {
	$.getJSON(
		"https://shared.flightwatching.com/public/metrics/samples.json",
		function( data ) {
			for (var i = 0; i < 10; i++) {
				setTimeout(function(val) {
					$(".odometer").html(val);
				}, 6000*i, Math.floor(+data.prev+(+data.next-data.prev)*i/10));
			}
		});
}

$(document).ready(function(){
	getSampleCount();
	setInterval(getSampleCount, 60000);
});
