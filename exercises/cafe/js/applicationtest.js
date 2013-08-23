$(document).ready(function() {
	$.ajax({
		type: 'get',
		url: 'http://api.census.gov/data/2010/sf1?key=4467c1f4e16c162f292ea278c3e6f3bede271311',
		data: {
			'get': 'P0010001,NAME',
			'for': 'state:*'
		},
		dataType: 'json',
		success: function(json) {
			console.log(json);
		}
	});
});