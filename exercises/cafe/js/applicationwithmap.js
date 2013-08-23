var map;

function getDynamicMap(position) {
	var mapOptions = {
		center: new google.maps.LatLng(37.797677,-122.394339),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	 map = new google.maps.Map(document.getElementById('map'), mapOptions);

}

 

$(document).ready(function() {
	$.ajax({
		type: 'get',
		url: 'http://bootcamp-rocketu.rhcloud.com/exercises/ajax/data/places-cafe.json',
		data: {},
		dataType: 'json',
		success: function(json) {
			console.log(json);
			$('#cafe-data').html(Mustache.render( $('#cafe-script').html(), json));
			for (i=0; i < json.length; i++) {
				var lat = json[i].geometry.location.lat;
				var lng = json[i].geometry.location.lng;
				var contentString;
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				var marker = new google.maps.Marker ({
					position: new google.maps.LatLng(lat,lng),
					map: map,
					title: 'It works'
				});
			}
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		}
	});
});