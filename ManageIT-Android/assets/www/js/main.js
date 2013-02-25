// Clear out page content and load clicked link

$("#native").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('home.html').show();
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
url: "https://graph.facebook.com/search?q=tech&type=post",
type: 'GET',
dataType: 'json',
success: function(request){
console.log(request);
for (i=0; i<3; i++){
$(     
			"<br/>"+
			"<ul>"+ 
			"<li>"+
			"<p>" + request.data[i].from.name+"</p> <br/>" +
			"<p>" +	request.data[i].message +",</p>" + 
			"<p>" +	request.data[i].created_time +"</p>" +
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





