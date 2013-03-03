document.addEventListener("deviceready", onDeviceReady, false);

	function onDeviceReady() {
		var options = { enableHighAccuracy: true };
		navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

}
    function onSuccess(position) {
        var element = document.getElementById('geoLocation');
        element.innerHTML = 'Latitude: '			+ position.coords.latitude				+ '<br />' +
                            'Longitude: '			+ position.coords.longitude				+ '<br />' +
                            'Timestamp: '			+ position.timestamp					+ '<br />' +
                            
                            '<br />';
			placeMap();
}
	var placeMap = function(){
	//alert('placeMap');
		var mapOptions = {
          center: new google.maps.LatLng(34.014264, -86.006639),
          zoom: 17,
          mapTypeControl : false, 
          navigationControl : false,
          streetViewControl : false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
     var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);      
     createMarker(map);
};

    function createMarker(map){
//console.log('createMarker');
$.ajax({
url: "https://graph.facebook.com/search?q=restaurant&type=place&center=34.014264,-86.006639&distance=1000&access_token=AAAAAAITEghMBAAaScEcHBG5qOy6KFLClKhYBbDh5ekZC6atBUZBYPIQEMu3cd2DKnf8ayVVgSZCZAvajB7iclXAhQgMVQy6aqBuXOMECApCYelguAPrp",
type: 'GET',
dataType: 'json',
success: function(request) {
    for (var i = 0; i < 5; i++) {   
      var myLatLng = new google.maps.LatLng(request.data[i].location.latitude, request.data[i].location.longitude);
      var marker = new google.maps.Marker({
          position: myLatLng,
          map: map
          //zIndex: i
      }); //Marker End
    
    iwContent(marker, map, request, i);

    } //Loop END
  } //Success Function END
}); //Ajax END

} //createMarker END

function iwContent(marker, map, request, i) {
console.log(iwContent);
  var infowindow = new google.maps.InfoWindow(request, i);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    infowindow.setContent(
    '<h3>'+ request.data[i].name +'</h3>' +
    '<ul>'+
    '<li>'+ request.data[i].location.street + '</li>' +
    '<li>'+ request.data[i].location.city + '</li>' +
    '<li>'+ request.data[i].location.state + '</li>' +
    '<li>'+ request.data[i].location.zip + '</li>' +
    '</ul>'
    );

  });
}	
    // onError Callback receives a PositionError object
    function onError(error) {
	navigator.notification.alert(
	"Can't get your current location. Make sure the geolocation service is enabled for this app.");
}
