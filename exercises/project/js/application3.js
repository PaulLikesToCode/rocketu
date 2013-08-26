var map;
var marker; 
var infoWindow;

function getDynamicMap(position) {
	var mapOptions = {
		center: new google.maps.LatLng(37.797677,-122.394339),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var infoWindow = new google.maps.InfoWindow({
		content: "some cool stuff"
	});

	marker = new google.maps.Marker ({
		position: new google.maps.LatLng(37.797677,-122.394339),
		map: map,
		title: 'Test Marker'
	});

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map,marker);
	});
}

google.maps.event.addDomListener(window, 'load', getDynamicMap);

