//Inject CSS file on load and orientation change

function orient() {
	if (Math.abs(window.orientation) == 90) {
		$("#orientation").each(function(){
	  	$(this).attr('href','css/landscape.css');		
	  });
	}
	else { 
		$("#orientation").each(function(){
	  	$(this).attr('href','css/portrait.css');		
	  }); 
	}
};

$(window).on('ready', function(){
	orient();
});

$(window).on('orientationchange', function(){
	orient();
});


// Clear out page content and load clicked link
// I realize this can be simplified to grab href atr and on a click of an a but I could not get it to work and want to show proof of concept more.

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

$(function() {
//get the JSON data from the Twitter search API
$.getJSON("http://search.twitter.com/search.json?q=fullsail&amp;rpp=5&amp;callback=?", 
function(data){
console.log(data);
	$("#twit").html("<h2>Twitter Results</h2>");
		for (i=0, j=data.results.length; i<j; i++) {
			$("#twit").append(
			"<br/>"+
			"<ul>"+ 
			"<li>"+
			'<img src='+data.results[i].profile_image_url+'>' +
			'<br/>' +
			'<p>' + data.results[i].text + '</p>'+
			"<br/>" + 
			'<p>' + data.results[i].from_user_name + ",</p>" + 
			'<p>' + data.results[i].created_at  + '</p>' +
			"</li>" +
			"</ul>");
		}
	});
});

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