var complaints;
var comments;
var username;
var thoughts;

// COMPLAINTS
if (localStorage.getItem('complaints')) {
	complaints = JSON.parse(localStorage.getItem('complaints'));
	console.log('if');
} else {
	complaints = {};
	comments = {};
	//lat = {};
	//lng = {};
	$.ajax({
		type: 'get',
		url: 'http://data.sfgov.org/resource/vw6y-z8j6.json',
		data: {},
		dataType: 'json',
		success: function(json) {
			for(var i=0; i<json.length; i++) {
				complaints[json[i].case_id] = json[i];
				for(var j=0; j<Faker.random.number(10)+1; j++) {
					comments[json[i].case_id] = {
						username: Faker.Internet.userName(),
						thoughts: Faker.Lorem.sentences()
					};
				}
			}
			localStorage.setItem('complaints',JSON.stringify(complaints));
			localStorage.setItem('comments',JSON.stringify(comments));
			console.log('complaints/comments');
		}
	});
}
console.log(complaints);

// COMMENTS
if (!comments && localStorage.getItem('comments')) {
	comments = JSON.parse(localStorage.getItem('comments'));
}
console.log(comments);




















