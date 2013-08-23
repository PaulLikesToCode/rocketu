/*function errorHandler() {
	console.log('error');
}

console.log(errorHandler);
console.log(errorHandler());
function runFunction(f) {
	f();
}*/

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		console.log(position);
		var url = 'http://maps.googleapis.com/maps/api/staticmap?';
			url += 'center=' + lat + ',' + lng + '&';
			url += 'zoom=13' + '&';
			url += 'sensor=false' + '&';
			url += 'size=600x300' + '&';
			url += 'key=AIzaSyB31mjMaXNA33VUKwCndXANCkbgULTyY2k';
		console.log(url);
		var map2 = document.getElementById('map2');
		map2.innerHTML = '<img src="' + url + '"/>';
	});
}
		/*console.log(lat);
		console.log(lng);
		var apikey="http://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=13&size=600x300&key=AIzaSyB31mjMaXNA33VUKwCndXANCkbgULTyY2k&sensor=false";
		console.log(apikey);
		document.getElementById("map").src=apikey;
		url = getStaticMap(position.coords);
		drawMap(url);*/
	//errorHandler);
	/*else {
	//Sorry, not supported
}*/
/*$.ajax({
	url: 'http://maps.googleapis.com/maps/api/staticmap?',
	dataType: json,
	center: 'center=',
	zoom: 13,
	sensor: false,
	size: '600x300',
	key: 'AIzaSyB31mjMaXNA33VUKwCndXANCkbgULTyY2k',
	success:
});*/

/*Dynamic*/
function getDynamicMap(position) {
	var mapOptions = {
		center: new google.maps.LatLng(37.797677,-122.394339),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(
		document.getElementById("dynamic-map"),
		mapOptions
	);

	var mapmarker = new google.maps.Map(document.getElementById('dynamic-map'), mapOptions); 

	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
	    '</div>'+
	    '<h2 id="firstHeading" class="firstHeading">Uluru</h2>'+
	    '<div id="bodyContent">'+
	    '<p>Here some info</p>'+
	    '</div>'+
	    '</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(37.797677,-122.394339),
		map: mapmarker,
		title: 'This is awesome.'
		});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(mapmarker,marker);
	});
}
google.maps.event.addDomListener(window, 'load', getDynamicMap);//$(window).on('load', getDynamicMap)


























