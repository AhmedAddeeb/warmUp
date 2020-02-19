// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.

//Answer: the correct operator is the less than operator '<'

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'

function helloWorld(langCode) {
    if (langCode==='en') {
        return 'Hello, World';
    }
    else if (langCode==='fr') {
        return  'Bonjour tout le monde';
    }
    else if (langCode==='es') {
        return 'Hola, Mundo';
    }
    else {
        return 'This is not a registered language code.'
    }
}
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]

function reverseArray(array) {
    var revArray=[];
    var j=0;

    for(var i=(array.length-1);i>=0;i--) {
        revArray[j]=array[i];
        j++;
    }
    return revArray;
}
