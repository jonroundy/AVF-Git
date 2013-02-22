// Clear out page content and load clicked link

$("#native").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('native.html').show();
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

$("#research").click( function() {
  //alert("Handler for .click() called.");
  $('.content').fadeOut(500, function() {
  $('.content').load('research.html').show();
});
return false;
});




$("#twitter").on('click', function(){
$('.content').fadeOut(500);
$('.content').empty();
$.ajax({
url: 'http://search.twitter.com/search.json?q=fullsail&amp;rpp=8&amp;callback=?',
type: 'GET',
dataType: 'json',
success: function(data){
console.log(data);
for (var i in data.results){
var items = data.results[i];
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



/*
$(function() {
$.getJSON("https://graph.facebook.com/search?q=tech&type=post", 
function(request){
console.log(request);
	$("#fb").html("<h2>Facebook Results</h2>");
		for (i=0; i<3; i++) {
			$("#fb").append(
			"<br/>"+
			"<ul>"+ 
			"<li>"+
			"<p>" + request.data[i].from.name 	+"</p> <br/>" +
			"<p>" +	request.data[i].message +",</p>" + 
			"<p>" +	request.data[i].created_time +"</p>" +
			"</li>" +
			"<br/>" +
			"</ul>");
		}
	});
});
*/