// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(num1, num2) {
    var divisor;

    if(num1%divisor===0 && num2%divisor===0){
        divisor= gcd(num1, num2) + 1;
    }
    if(divisor>num1 || divisor>num2){
        return divisor;
    };
    }
    
    return gcd(num1, num2) + 1;
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function recurseSum(num1, num2) {
    var sum;
    
    if(sum = num1 + num2){
    	return sum
    }
    return sum = recurseSum(num1, num2) + 1;
}