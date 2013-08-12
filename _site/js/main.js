function JSONP( url, callback ) {
	var id = ( 'jsonp' + Math.random() * new Date() ).replace('.', '');
	var script = document.createElement('script');
	script.src = url.replace( 'callback=?', 'callback=' + id );
	document.body.appendChild( script );
	window[ id ] = function( data ) {
		if (callback) {
			callback( data );
		}
	};
}

var scoopitRss = function(callback) {
	//use yahoo pipes to transform the XML feed to a JSON feed
	JSONP( 'http://pipes.yahoo.com/pipes/pipe.run?_callback=?&_id=9oyONQzA2xGOkM4FqGIyXQ&_render=json&feed=http%3A%2F%2Fwww.scoop.it%2Ft%2Fflightwatching%2Frss.xml', function( data ) {
		callback(data.value);
	});
}

var month=new Array();
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";