function answerYes(){
	alert("Thank you?")
}
function answerNo(){
	alert("Thank you for your input.")
}
function hello(){
	var name = prompt("Hello, what is your name?")
	if (name === 'I am in legal trouble'){window.location.href = "https://www.youtube.com/watch?v=gDjMZvYWUdo";
	}
}

function age(){
	var age = prompt("How old are you?")
		
	if (age> 18) {alert('Damm '+age+'? '+name+', OK boomer. Nice to meet you.')
	window.location.href = "https://en.wikipedia.org/wiki/Dinosaur";	
	}
	else {alert('Hello '+name+'. You are too young. Nice to meet you.')
	window.location.href = "https://www.youtube.com/watch?v=hqzvHfy-Ij0";
	}
}
