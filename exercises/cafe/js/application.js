$(document).ready(function() {
	$.ajax({
		type: 'get',
		url: 'http://bootcamp-rocketu.rhcloud.com/exercises/ajax/data/places-cafe.json',
		data: {},
		dataType: 'json',
		success: function(json) {
			console.log(json);
			/*for (i=0; i < json.length; i++) {
				var lat = json[i].geometry.location.lat;
				var lng = json[i].geometry.location.lng;
				console.log(lat);
				console.log(lng);
				var url = 'http://maps.googleapis.com/maps/api/staticmap?';
					url += 'center=' + lat + ',' + lng + '&';
					url += 'zoom=15' + '&';
					url += 'sensor=false' + '&';
					url += 'size=150x150' + '&';
					url += 'key=AIzaSyB31mjMaXNA33VUKwCndXANCkbgULTyY2k';
				console.log(url);
				$('#map').append('<img src="' + url + '"/>');*/				
			$('#cafe-data').html(Mustache.render($('#cafe-script').html(), json));
			function getDynamicMap(position) {
				var mapOptions = {
					center: new google.maps.LatLng(37.797677,-122.394339),
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}

				var map = new google.maps.Map(
					document.getElementById("map"),
					mapOptions
				);
			var mapmarker = new google.maps.Map(document.getElementById('map'), mapOptions); 

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
			for (i=0; i < json.length; i++) {
				var lat = json[i].geometry.location.lat;
				var lng = json[i].geometry.location.lng;
				var marker = new google.maps.Marker ({
					position: new google.maps.LatLng(lat,lng),
					map: mapmarker,
					title: 'This is awesome.'
				});
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(mapmarker,marker);
				});
			}
			google.maps.event.addDomListener(window, 'load', getDynamicMap);
			console.log('success');
		}
	}
});	
});
/*function getDynamicMap(position) {
	var mapOptions = {
		center: new google.maps.LatLng(37.797677,-122.394339),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(
		document.getElementById("map"),
		mapOptions
	);*/

	/*var mapmarker = new google.maps.Map(document.getElementById('map'), mapOptions); 

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
	});*/
	/*var lat = json[i].geometry.location.lat;
	var lng = json[i].geometry.location.lng;
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(lat,lng),
		map: mapmarker,
		title: 'This is awesome.'
		});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(mapmarker,marker);
	});*/
/*}
google.maps.event.addDomListener(window, 'load', getDynamicMap);
console.log('success');*/

				//var map = document.getElementById('map');
				//map.innerHTML = '<img src="' + url + '"/>';
			//}
			/*var cafeInfo = $('#cafe-script').html();
			var cafeData = Mustache.render(cafeInfo, json);
			$('#cafe-data').append(cafeData);*/

			/*function getDynamicMap(position) {
			var mapOptions = {
				center: new google.maps.LatLng({{#geometry}}{{#location}}{{lat}}{{/location}}{{/geometry}}{{/.}},{{#.}}{{#geometry}}{{#location}}{{lng}}{{/location}}{{/geometry}}),
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
		google.maps.event.addDomListener(window, 'load', getDynamicMap);*/

			/*<div id="map"/>
					var lat = {{#geometry}}{{#location}}{{lat}}{{/location}}{{/geometry}}
					var lng = {{#geometry}}{{#location}}{{lat}}{{/location}}{{/geometry}}
					console.log(geometry);
					var url = 'http://maps.googleapis.com/maps/api/staticmap?';
						url += 'center=' + lat + ',' + lng + '&';
						url += 'zoom=10' + '&';
						url += 'sensor=false' + '&';
						url += 'size=200x200' + '&';
						url += 'key=AIzaSyB31mjMaXNA33VUKwCndXANCkbgULTyY2k';
					console.log(url);
					var map = document.getElementById('map');
					map.innerHTML = '<img src="' + url + '"/>'

				</div>*/