// Primitive
/*                                  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

          => For the above data types, their typeof is same as data type EXECEPT "null" -> 'object'.
*/ 
// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null  // null -> we can say that it is completely empty.
// let userEmail;
// const id = Symbol('123')
// console.log(typeof id);
// const anotherId = Symbol('123')
// console.log(typeof anotherId);
// console.log(id === anotherId);
// const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber);



// Reference (Non primitive)  : Note :-> For all non-primitive data types, Their return type is "object" only Except "function" -> function( Also called as function object)
//                                      Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// console.log(typeof heros);

// let myDetails = {
//     name: "Nitish",
//     age: 24,
// }
// console.log(typeof myDetails);

// const myFunction = function(){
//     console.log("Hello Nitish");
// }
// console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3


//                    Memory and its Working 
/*
        Two types of memory :-
        1. Stack    ---used in ---> Primitive dataype   ---when we declaired then we get a ----> Copy of that variable
        2. Heap    ---used in ---> Non-Primitive datatype   ---when we declaired then we get a ----> Refrance of that variable/object

*/

// let firstName = "Amit";

// let updatedName = firstName;

// updatedName = "Nitish";

// console.log(firstName);
// console.log(updatedName);

let userOne = {
    id : 1,
    name : "amit"
}

let userTwo = userOne;

userTwo.name = "Nitish";

console.log(userOne.name);
console.log(userTwo.name);