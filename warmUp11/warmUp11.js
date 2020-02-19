/*
1. create a data model to represent your classmates
    • think of different attributes of your classmates? what do all of them have ?
    • create a factory function.
    • create an array to hold the classmates that you created and what you created to it .
    • write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
    • write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
    • calculate the number of male friends that your class have by writing a function called nbOfMale.
    • Write a function searchMates that, given a query and an array of Mates,
      searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
*/

function classMates(name, age, profession, gender, race){
  return objClass= {
    name: name,
    age: age,
    profession: profession,
    gender: gender,
    race: race
  }
}

var arrayClass=[];
arrayClass.push(classMates('Belgacem', 25, 'Telecommunications', 'male', 'arab'));
arrayClass.push(classMates('Aymen', 37, 'Engineering', 'male', 'arab'));
arrayClass.push(classMates('Nouha', 25, 'unknown', 'female', 'arab'));

function displayFriend(friend){
  return 'My friend is named ' + friend.name + '.' +
         '\nMy friend is ' + friend.age + ' years of age.' +
         '\nMy friends profession is ' + friend.profession +  '.' +
         '\nMy friend is ' + friend.gender + '.' +
         '\nTheir race is ' + friend.race + '.';  

}

function addFriend(mate){
  return arrayClass.push(mate)
}

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


function numMales(arrayOfClass){
  var counter=0;
  each(arrayOfClass, function(element, i){
    if(element.gender==='male'){
      counter= counter+1;
    }
  });
  return counter;
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

function findMates(array, query){
  return filter(array, function(element, i){
    return element.name===query || element.age===query || element.profession===query 
    || element.gender===query || element.race===query;
  });
}
