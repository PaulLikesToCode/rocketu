$(document).ready(function() {
	$('button#getjson').click(function(){
		var aboutMe = {
			"firstname": "Paul",
			"lastname": "Schrage",
			"email": "paul_schrage@yahoo.com",
			"age": "old",
			"cellnumber": "2022464098",
			"favoritebands": ["The Sam Chase", "The Bad Plus"]
		};
		$('p#json').append("Hi, I'm " + aboutMe.firstname + ". I'm " + aboutMe.age + " and I like listening to " + aboutMe.favoritebands[0]);
		console.log('Success');
	});
	$('button#getjsonajax').click(function() {
		$.ajax({
			url: 'js/mydata.json',
			dataType: 'json',
			success: function(aboutme)
			{
				$('p#ajax').append("Hi, I'm " + aboutme.firstname + ' . I\'m ' 
					+ aboutme.age + ' and my cell number is ' + aboutme.cellnumber 
					+ ' . Here a list of bands that I like: ' );
				for (i=0; i < aboutme.favoritebands.length; i++) {
					$('ul').append(aboutme.favoritebands[i] + '<br/>');
				}
				//$('ul#ajaxul').append(aboutme.favoritebands);
				console.log('Success');
			}
		});
	});	
	$('button#getxmlajax').click(function() {
		$.ajax({
			url: 'js/mydata.xml',
			dataType: 'xml',
			success: function(person)
			{
				var firstname = $(person).find("firstname").text();
				console.log('Success');
			}
		});
	});
});