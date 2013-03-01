document.addEventListener("deviceready", onDeviceReady, false);
	
			//alert("GEO READY");
	//var watchID = null;

	function onDeviceReady() {
		var options = { enableHighAccuracy: true };
		navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

}

    function onSuccess(position) {
        
        var element = document.getElementById('geoLocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Timestamp: '          + position.timestamp          		   + '<br />' +
                            '<br />';
		
			placeMap();
    }

	var placeMap = function(){
		var mapOptions = {
          center: new google.maps.LatLng(34.014264, -86.006639),
          zoom: 8,
          mapTypeControl : false, 
          navigationControl : false,
          streetViewControl : false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
            sites();
            //setMarkers(map, sites);
            
};

var sites = function(request) {
$.ajax({
url: "https://graph.facebook.com/search?q=restaurant&type=place&center=34.014264,-86.006639&distance=1000&access_token=AAAAAAITEghMBAMFdsgvFm1nadPyrg2DK3i0DDIaWjZAUiWM7hv9g8ycDZCZCuJzv2G78aW6G3GwMxspLj0Dy49ZB2xRo1TcsOz6dBNTujhlAJLtlnwYx",
type: 'GET',
dataType: 'json',
success: function(request){
for (i=0; i<3; i++) {
	
	var latVal = request.data[i].location.latitude;
	var lngVal = request.data[i].location.longitude;
	var resName = request.data[i].name;
			}
			console.log(request);
		}
	});
};

/*var setMarkers = function(map, data) {
alert('setmarkers');
console.log(data[i].location.latitude);
for (var i=0; i<5; i++) {
    //var sites = locations[i];
    var myLatLng = new google.maps.LatLng(data[i].location.latitude, data[i].location.longitude);
    var marker = new google.maps.Marker({position: myLatLng, map: map, title: data[i].name});
			}
};
*/
    
    
    
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
	    navigator.notification.alert(
            "Can't get your current location. Make sure the geolocation service is enabled for this app.");
    }
