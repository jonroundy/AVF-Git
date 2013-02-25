    var watchID = null;
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        startWatch();
    }
    
    function startWatch() {
        // Update compass every 3 seconds
        var options = { frequency: 3000 };

        watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    }
    
    function stopWatch() {
        if (watchID) {
            navigator.compass.clearWatch(watchID);
            watchID = null;
        }
    }
    
    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    }

    function onError(compassError) {
        alert('Compass error: ' + compassError.code);
    }