// Clear out page content and load clicked link

$("#native").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('home.html').show();
});
return false;
});

$("#data").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('data.html').show();
});
return false;
});



function loader() {
	var state = document.readyState;
	
	if (state == 'loaded' || state == 'complete') {
		run();
	} else {
	if (navigator.userAgent.indexOf('Browzr') > -1) {
		setTimeout(run, 250);
	} else {
		
	document.addEventListener('deviceready',run,false);

		}
	}
}

function run() {
	var success = function(position) {                          // Grab coordinates object from the Position object passed into success callback.
	var coords = position.coords;
	var url = "http://maps.google.com/maps/api/staticmap?center=" + coords.latitude + "," + coords.longitude + "&zoom=13&size=320x480&maptype=roadmap&key=AIzaSyAfSCWj9LSPh0HIdEVBozkub1l9yrwqUV4&sensor=true";
document.getElementById('map').setAttribute('src',url);
};
	var error = function(e) {
		alert('Can\'t retrieve position.\nError: ' + e);
 };
navigator.geolocation.getCurrentPosition(success, error);
} 







/* DATA APIs */
$("#twitter").on('click', function(){
$('.content').fadeOut(500);
$('.content').empty();
$.ajax({
url: 'http://search.twitter.com/search.json?q=fullsail&amp;rpp=8&amp;callback=?',
type: 'GET',
dataType: 'json',
success: function(data){
console.log(data);
for (i=0; i<8; i++){
$(     
			"<h2>Twitter Results</h2>"+
			"<br/>"+
			"<ul>"+ 
			"<li>"+
			'<br/>' +'<img src='+data.results[i].profile_image_url+'>' +
			"<br/>" + '<p>' + data.results[i].text + '</p>'+
			'<p>' + data.results[i].from_user_name + ",</p>" + 
			'<p>' + data.results[i].created_at  + '</p>' +
			"</li>" +
			"</ul>"
).appendTo('.content');
$('.content').fadeIn(1000);
			}
		},
	});
});



$("#facebook").on('click', function(){
$('.content').fadeOut(500);
$('.content').empty();
$.ajax({
url: "https://graph.facebook.com/search?q=tech&type=post",
type: 'GET',
dataType: 'json',
success: function(request){
console.log(request);
for (i=0; i<3; i++){
$(     
			"<h2>FaceBook Results</h2>"+
			"<br/>"+
			"<ul>"+ 
			"<li>"+
			"<p>" + request.data[i].from.name 	+"</p> <br/>" +
			"<p>" +	request.data[i].message +",</p>" + 
			"<p>" +	request.data[i].created_time +"</p>" +
			"</li>" +
			"<br/>" +
			"</ul>"
).appendTo('.content');
$('.content').fadeIn(1000);
			}
		},
	});
});
