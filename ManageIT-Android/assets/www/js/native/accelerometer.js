$(document).ready(function(){
    // The watch id references the current `watchAcceleration`
    var watchID = null;

    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);
    // Cordova is ready
    //
    function onDeviceReady(){
        startWatch();
    }
    // Start watching the acceleration
    //
    function startWatch() {
    // Update acceleration every 3 seconds
        var options = { frequency: 3000 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }
    // Stop watching the acceleration
    //
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }
    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = '<h3>Acceleration X:</h3><p id="accelX">  <br/>' + acceleration.x + '</p> <br />' +
                            '<h3>Acceleration Y:</h3><p id="accelY">  <br/>' + acceleration.y + '</p> <br />' +
                            '<h3>Acceleration Z:</h3><p id="accelZ">  <br/>' + acceleration.z + '</p> <br />' +
                            ' <h3>Timestamp:</h3><p id="accelTime"> <br/>' + acceleration.timestamp + '</p> <br />';
    }
    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }
    });