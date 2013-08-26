var map;
var marker;
var infoWindow;
var customInfo;
var address;
var lat;
var lng;

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
			console.log(complaints);
			for (i=0; i < complaints.length; i++) {
				console.log('complaints');
				var lat = complaints.point.latitude;
				var lng = complaints.point.longitude;
				var address = complaints.address;
				console.log(address);
				console.log('functioncomplaints');
				var customInfo = complaints.category;
				var infoWindow =  new google.maps.InfoWindow({
					content: customInfo
				});
				var marker = new google.maps.Marker ({
					position: new google.maps.LatLng(lat,lng),
					map: map,
					title: customInfo
				});
			}
		}
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
});