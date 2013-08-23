function sayHello() {
	console.log('Hello, World!');
}
function getGreeting() {
	var date = new Date();
	var hours = date.getHours();
	var greeting
	if (hours < 12) {
		greeting = 'Good Morning';
	} else {
		greeting = 'Good Afternoon';
	}
	alert(greeting);
}

function sayPersonalHello() {
	var name = window.prompt('Hi, what\'s your name?');
	if (name == '') {
		alert('Sorry, I don\'t talk to strangers...');
	} else {
		var x;
		var r=confirm('Good morning, ' + name + ', how are you?\nWould you like this greeting added to the page? ');
		if (r==true) {
			x = 'Good morning, ' + name + ', how are you?'
		}
		else {
			x = '';
		}
		document.getElementById('greetinghtml').innerHTML=x;
		}
	}

function doTimesTables() {
	var y;
	var mynumber = window.prompt('Please enter a number from 1 to 10.');
	if (mynumber < 11) {
		for (i = 1; i < 11; i++) {
			y = i + ' x ' + mynumber + ' = ' + (mynumber*i) + '<br/>';
			document.getElementById('timestable').innerHTML+=y
			}
		}	
	else {
		y = 'Sorry, that doesn\'t look like a number - please try again.';
		document.getElementById('timestable').innerHTML=y
	}
}

		/*var jsgreeting=confirm('Good morning, ' + name + ' how are you? Would you like this greeting added to the page?');
	}
		var onpagegreeting = 'Good morning ';
		if (jsgreeting==true) {
			document.getElementById("greetinghtml").innerHTML==onpagegreeting;
		}
		else {

		}
}*/
/*function getUserName() {
	var name=window.prompt('Hi, what\'s your name?', '');
} */