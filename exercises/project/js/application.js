var map;
var marker;
var infowindow;
var customInfo;
var address;

function getDynamicMap(position) {
	var mapOptions = {
		center: new google.maps.LatLng(37.797677,-122.394339),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	 map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

var map = google.maps.event.addDomListener(window, 'load', getDynamicMap);
console.log('success');

$(document).ready(function() {
	$.ajax({
		type: 'get',
		url: 'http://data.sfgov.org/resource/vw6y-z8j6.json',
		data: {},
		dataType: 'json',
		success: function(json) {
			console.log(json);
			for (i=0; i < json.length; i++) {
				var lat = json[i].point.latitude;
				var lng = json[i].point.longitude;
				var address = json[i].address;
				var customInfo = json[i].category;
				var infowindow = new google.maps.InfoWindow({
					content: customInfo
				});
				var marker = new google.maps.Marker ({
					position: new google.maps.LatLng(lat,lng),
					map: map,
					title: customInfo
				});				
				//console.log(address);
			}	
		}	
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
});

$(document).ready(function() {
	$.ajax({
		type: 'get',
		url: ''

	});
});






/*function getDynamicMap(position) {
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
	    '<h2 id="firstHeading" class="firstHeading">Pothole</h2>'+
	    '<div id="bodyContent">'+
	    '<p>Here is some info</p>'+
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

$(document).ready(function() {
	$.ajax ({
		type: 'get',
		url: 'http://data.sfgov.org/resource/vw6y-z8j6.json',
		data: {},
		dataType: 'json',
		success: function(json) {
			console.log(json);
		}
	});
});*/