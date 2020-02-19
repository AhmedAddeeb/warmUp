// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var globalFemales=['Nuha', 'Siwar', 'Haleema'];

var globalMales=['Amir','Ghazi','Mohamed','Houssam'];

var globalInstructers=['Walid', 'Cassel', 'Seif'];




// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middleIndex(array) {
    
    for(var i=0; i<array.length; i++){
        if( array.length%2!==0 && ((array.length+1)/i)%2===0 ) { //if the array length is odd, we will only have one value in the middle
            return array[i];
        }
        if( array.length%2===0 && ((array.length)/i)%2===0 ) {  //if array length is even we will have two values in the middle 
            return array[i] + ', ' + array[i+1];
        }
    }
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

// Using map
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




function map (coll,f){
 var acc=[]
 if (!Array.isArray(coll)) {
     acc={}
 }
 each (coll,function(value,key){
     acc[key]=f(value,key)
 })
 return acc
}

function evenIndexTwo(array){

    return map(array, function(element, i){
        if(i%2===0){
            return element*2;
        }
        else return element;
    });
}
