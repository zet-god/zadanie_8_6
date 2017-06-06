//alert('hello');

/* wartości dodatnie
var a = 10;
var b = 7.5; */

/* wartości ujemne
var a = -10;
var b = 7; */

//wartości dla value = 0
var a = 0;
var b = 0;

var value = (a * a) + (2 * a * b) - (b * b);

// werszyn łan

if (value > 0) {
	console.log('wyinik dodatni');
} else if (value < 0) {
	console.log('wynik ujemny');
} else {
	console.log('wynik równy zero');
}

// version two

var whatIsBigger = value > 0 
	? 'wynik dodatni' 
	: value < 0 
		? 'wynik ujemny' 
		: 'wynik równy 0';

console.log(whatIsBigger);