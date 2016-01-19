var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
    return query_string;
}();

var fcFolder = '/data/ETD/A380_Doc/'+QueryString.FC+"/";
if (QueryString.nogo) {
	$("#header").addClass("nogo");
}

$('#bite-msg').html(QueryString.FC+" - "+QueryString.description);
$('#ac-reg').html(QueryString.reg);
$('#ACCESS1').attr('src', fcFolder+'ACCESS1.png');
$('#ACCESS2').attr('src', fcFolder+'ACCESS2.png');
$('#ACCESS3').attr('src', fcFolder+'ACCESS3.png');
$('#ACCESS4').attr('src', fcFolder+'ACCESS4.png');
$('#LOC1').attr('src', fcFolder+'LOC1.png');
$('#LOC2').attr('src', fcFolder+'LOC2.png');
$('#fig1').attr('src', fcFolder+'fig1.png');
$('#fig2').attr('src', fcFolder+'fig2.png');
$('#fig3').attr('src', fcFolder+'fig3.png');
$('#fig4').attr('src', fcFolder+'fig4.png');
