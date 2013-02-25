$(document).ready(function(){
    // The watch id references the current `watchAcceleration`
    var watchId = null;
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        startWatch();
    }
    // Start watching the acceleration
    //
    function startWatch() {
        watchId = navigator.accelerometer.watchAcceleration(onSuccess, onError, options, );
    }


    function placeMap () {
        var element = document.getElementById("map_canvas"),options);
            
        var options = {
                  center: new google.maps.LatLng(-34.397, 150.644),
                  zoom: 8,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };

        return this;
    }

    // Stop watching the acceleration
    //
    function stopWatch() {
        if (watchId) {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }
    }
    
    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(position) {
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.setCenter(latLng);
        new google.maps.Marker({map: map, position: latLng});
    }
 
   

    // onError: Failed to get the acceleration
    //
    function onError() {
	    navigator.notification.alert(
            "Can't get your current location. Make sure the geolocation service is enabled for this app.",
            null,
            'Geolocation',
            'OK'
        );
    }
    });
