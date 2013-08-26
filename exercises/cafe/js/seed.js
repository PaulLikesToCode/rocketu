var restaurant
var name;
var priceLevel;

if (localStorage.getItem('restaurant')) {
	restaurant = JSON.parse(localStorage.getIten('restaurant'));
	console.log('if');
} else {
	restaurant = {};
	$.ajax({
		type: 'get'
		url: 'bootcamp-rocketu.rhcloud.com/exercises/ajax/data/places-restaurant.json',
		data: {},
		dataType: 'json',
		success: function(json) {
			for(var i=0; i<json.length; i++) {
				restaurant[i] = {
					name: json[i].name,
					priceLevel: json[i].price_level
				};
			}
			localStorage.setItem('restaurant',JSON.stringify(restaurant));
			console.log(restaurant);
		}
	});
}
console.log('else');