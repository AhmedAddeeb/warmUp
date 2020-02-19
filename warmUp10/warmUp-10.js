// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(str) {
	var arr=[];
	var i=(str.length-1);
	var j=0;
	
	while(i>=0) {
		arr[j]= str[i] + j;
		i--; j++;
	};
	return (arr.toString()).replace(/,/g, '');	//we convert the array into a string
	                                         // Then using a built in function we can remove the commas
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

// using filter

function each(coll, func) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                func(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                func(coll[key], key); 
          } 
    } 
}
function filter(array, predicate) {
  var acc=[];

  each(array, function(element){
      if (predicate(element)) {
          acc.push(element);
      }
  });
  return acc;
}

function sameLength(array){
    return filter(array, function(element, i){
        return element===each(array,function(element,i){
            return array[i].length;
        });
    });
}