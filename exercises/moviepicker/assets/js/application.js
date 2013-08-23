$(document).ready(function() {
	$("div#picklist ul.picklist").hide();
	$('input[type=checkbox]').on('click',function() {
		console.log('click');
		console.log(this);
		var name = $(this).attr('name');
		console.log(name);
		$('.' + name).toggle();
	});
	$('#highlight').on('click', function() {
		console.log('highlight');
		var buttontext = $(this).text();
		console.log(buttontext);
		if (buttontext === 'Highlight new movies') {
			$('.new').css('background-color', 'green');
			$('#highlight').html('Unhighlight new movies');
		} else {
			$('.new').css('background-color', 'white');
			$('#highlight').html('Highlight new movies');
		}
	});
	$('li').on('dblclick', function() {
		console.log('clicked');
		var movieTitle = $(this).text();
		console.log(movieTitle);
		$('ul#picklist').prepend(movieTitle + '<br/>');
		$('div.picklist p').hide();
	});
});

/*$(document).ready(function(){
	$('input#action').click(function() {
		if ($('input#action').prop("checked", false)) {
		$('div#action').hide();}
		else {
	$('input#action').click(function() {
		$('input#action').prop("checked", true);
		$('div#action').show();}
	});
});*/
/*Listen on the checkbox. Determine its state. If checked, show the related movie list. If unchecked, hide 
related movie list.*/
/*Click the New Movies button. Give new property. Apply color. Change button text to "Unhighlight new movies".
Clicking again remove highlighting and reset.*/

