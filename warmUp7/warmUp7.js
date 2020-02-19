//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
<<<<<<< HEAD

function isArray(input) {
    if (Array.isArray(input)) {
        return true; 
=======
function isArray(input) {
    if (Array.isArray(input)) {
        return true;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
    }
    else {
        return false;
    }
<<<<<<< HEAD
};



//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

function firstArray(array, n) {
    nArray=[];
    for (var i=0; i<n; i++) {
        nArray.push(array[i]);
    }
    return nArray;
};


=======
}
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
function first(array, n) {
    var arr = [];
    if (n >= array.length) {
        arr = array;
    }
    else if (n < 0) {
        return "Please enter a positif number"
    }
    else {
        for (var i = 0; i < n; i++) {
            arr.push(array[i]);
        }
    }
    return arr;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

//with the use of map

function objectToArray(obj) {
    var arrayOne=[];
    var arrayTwo=[];
    var objArray=[];
    var toArray=Object.keys(obj);
      arrayOne.push(toArray[0]); //arrayOne takes name and its value
      arrayOne[1]=obj.name;
      arrayTwo.push(toArray[1]); //arrayTwo takes age and its value
      arrayTwo[1]=obj.age;
    objArray=[arrayOne,arrayTwo]; //objArray is an array consisting of the arrays for the object keys
    return objArray; 
};