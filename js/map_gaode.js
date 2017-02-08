var mapObj, geolocation;
function mapInit() {
	geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
        convert: true,
        showButton: true,
        buttonPosition: 'LB',
        buttonOffset: new AMap.Pixel(10, 20),
        showMarker: true,
        showCircle: true,
        panToLocation: true,
        zoomToAccuracy: true
	});
	AMap.event.addListener(geolocation, 'complete', onComplete);
    
};

function onComplete(data) {
    var map = new AMap.LngLat(data.position.getLng(), data.position.getLat());
    mapObj = new AMap.Map('map', {
    	view: new AMap.View2D({
    		center: map,
    		zoom: 18
    	})
    });
};