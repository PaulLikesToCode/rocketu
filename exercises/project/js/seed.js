var clearLocalStorageFlag = false;

var comments = [];
if (localStorage.getItem('comments') && !clearLocalStorageFlag) {
	users = JSON.parse(localStorage.getItem('comments'));
	console.log('if')
} else {
		for(var i=0; i<10; i++) {
			comments.push({
				username: Faker.Internet.userName(),
				thoughts: Faker.Lorem.sentences()
			});
		console.log('else');
		}
		localStorage.setItem('comments',JSON.stringify(comments));
}
console.log('faker');