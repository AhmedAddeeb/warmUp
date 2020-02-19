// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

function objKey(obj) {
  var keyArray=[];
  return keyArray=Object.keys(obj);
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj) {
  var keyArray=Object.keys(obj);
  return keyArray.length; 
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

function objSort(arrayObj) {
  var sortedArray=[];

  for(var i=arrayObj.length;i<0;i--) {
    if (arrayObj[i].id===i) {
      sortedArray.push(arrayObj[i]);
    }
  }
  return sortedArray;
}
