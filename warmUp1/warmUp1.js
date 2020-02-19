// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
fullName= "Aymen" + "Yaich";


//1
function name(firstName, lastName) {
	return firstName + ' ' + lastName;
}
//'Siwar'+' Hkimi';

function divisible(num) {
	if (num%13===0) {
		return true
	}
	return false
}

Arrr= [13,14,13,15,16,17,19,13,16,15];

function arrayAge(array) {
	var result;
	for (var i=0;i<array.length;i++) {
		result=result+array[i];

	}
	return result/array.length;
}

function calcAge(years,days) {
 return 'Your age is ' + (years*365+days)*24*60*60 + 'seconds!';
}