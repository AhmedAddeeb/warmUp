// 1-Define a function called myTrueFun that returns true whenever its called.
<<<<<<< HEAD

var myTrueFun= function(func){
	if (myTrueFun(func)===myTrueFun(myTrueFun)){
		return true;
	}
	else {return false;}

}

// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

function typeFunc(value){
	if ((typeof value)==='string'){
		return true;
	};
	
		return false;
	

}


// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

function prime(number,test) {
	if (number===test  number) {
		
	}

}


// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
=======
function myTrueFun() {
	return true;
}
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

function typeFunc(value) {
	if (typeof value === 'string') {
		return myTrueFun();
	}
	return false;

}
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function prime(number) {
	if (typeof number !== 'number') {
		return "Please enter a number.";
	}
	else {
		if (number < 2) {
			return "Not a prime number.";
		}
		else if (number === 2) {
			return "2 is a prime number"
		}
		else {
			for (var i = 2; i < number; i++) {
				if (number % i === 0) {
					return "Not a prime number.";
				}
				else {
					return "Yey it is a prime number";
				}
			}
		}
	}
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function sameValue(num1, num2) {
	if ((typeof num1 !== 'number') || (typeof num1 !== 'number')) {
		return "Please enter two numbers.";
	}
	else {
		if (num1 === num2) {
			return myTrueFun();
		}
		return !(myTrueFun());
	}
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
