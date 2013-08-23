$(document).ready(function() {
	$('form').on('submit',function() {
		var firstname = $(this).find('input#firstname').val();
		console.log(firstname);
		var lastname = $(this).find('input#lastname').val();
		console.log(lastname);
		console.log(firstname + ' ' + lastname);

		$.ajax(
			{
				url:'http://bootcamp-rocketu.rhcloud.com/api', 
				type: 'GET',
				dataType: 'json',
				data: {
					fname: firstname,
					lname: lastname,
					date: (new Date())
				},
				success: function(json) {
					console.log(json);
					//do something here
				}

			}
		);

		return false;
	});
});