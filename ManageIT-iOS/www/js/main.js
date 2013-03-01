// Clear out page content and load clicked link
$("#native").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('home.html').show();
});
return false;
});

$("#camera").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('camera.html').show();
});
return false;
});

$("#deviceInfo").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('device.html').show();
});
return false;
});

$("#browser").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('browser.html').show();
});
return false;
});

$("#accel").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('accelerometer.html').show();
});
return false;
});

$("#compass").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('compass.html').show();
});
return false;
});

$("#googleMaps").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('geo.html').show();
});
return false;
});

$("#contact").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('contacts.html').show();
});
return false;
});

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
		}
	});
	return false;
});

$("#facebook").on('click', function(){
$('.content').fadeOut(500);
$('.content').empty();
$.ajax({
url: "https://graph.facebook.com/search?q=coffee&type=place&center=37.76,-122.427&distance=1000&access_token=AAAAAAITEghMBAOaFKMmoY4zE4JX9LcPI5O2aBZANoWSDRUhcnvMU0QikM8rqKn4I7IKqvQ9XLDqB6YdoZAW3FjCRAvbXSBUkmmo4Of0gZAFfYFK5yfx",
type: 'GET',
dataType: 'jsonp',
success: function(request){
console.log(request);
for (i=0; i<3; i++){
$(     
			"<br/>"+
			"<ul>"+ 
			"<li>"+
			"<p>" + 'Name: ' + request.data[i].name+"</p> <br/>" +
			"<p>" + 'Street: ' +	request.data[i].location.street +",</p>" + 
			"<p>" + 'City: ' +	request.data[i].location.city +"</p>" +
			"<p>" + 'State: ' +	request.data[i].location.state +"</p>" +
			"<p>" + 'Zip: ' +	request.data[i].location.zip +"</p>" +
			"<p>" + 'Latitude: ' +	request.data[i].location.latitude +"</p>" +
			"<p>" + 'Longitude: ' +	request.data[i].location.longitude +"</p>" +
			"</li>" +
			"<br/>" +
			"</ul>"
).appendTo('.content');
$('.content').fadeIn(1000);
			}
		}
	});
	return false;
});

/* PHONEGAP */





