// function that create another function 
function greater(n){
	return function (m){
		return m > n;
	};
}

var number = greater(10);
console.log(number(9)); //return 'false'

//function that change other functions

function noisy(f){
	return function(arg){
		console.log("calling ", arg);

		var values = f(arg);
		console.log("calling ", arg, "-got ", values);
		return values;
	};
}

noisy(Boolean)(0);