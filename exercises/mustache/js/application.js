/*
	Goal: Get JSON data from "API"
		http://bootcamp-rocketu.rhcloud.com/exercises/ajax/data/movies-box-office.JSON
	Logic:
		1. Retrieve JSON object from target URL
		2. Console.Log
			*Make sure document is ready!!!
*/

/*$(document).ready(function() {
	$.ajax({
		//Request
		type: 'get',
		url: 'http://bootcamp-rocketu.rhcloud.com/exercises/ajax/data/movies-box-office.json',
		data: {},
		//Response
		dataType: 'json',
		success: function(json) {
			console.log(json);
			console.log(json.movies);
			for (var i in json.movies) {
				var title = json.movies[i].title;
				$('#movies').append($('<li/>').html(title));
			}
			for(var i in json.movies) {
				var movieItems = '<li>';
					movieItems += json.movies[i].title;
					movieItems += '<img src="' +json.movies[i].posters.thumbnail + '"/>';
					movieItems += '</li>';
				$('#movieitems').append(movieItems);

				var movieInnerTemplate = '<li>{{title}}<img src="{{posters.thumbnail}}"/></li>';
				// In mustache double {{}} means get this thing
				var movieTemplate = $('#movie-template').html();

				var output = Mustache.render(movieTemplate, json.movies[i]);
				$('#mustache').append(output);
			}
		},
		//Exercise 2: Display movie titles in a list in HTML
		//Logic: 1. Identify list of movies 2. Loop through list 3. Find movie title and add to list

	});
});*/

$(document).ready(function() {
	$.ajax({
		type: 'get',
		url: 'http://bootcamp-rocketu.rhcloud.com/exercises/ajax/data/movies-box-office.json',
		data: {},
		dataType: 'json',
		success: function(json) {
			var movieMustache = $('#onlyMustache').html();
			//console.log(movieMustache);
			var output = Mustache.render(movieMustache, json);
			//console.log(output);
			$('#moviemustache').append(output);
			console.log(json);
		},
	});
});









