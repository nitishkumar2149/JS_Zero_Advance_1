"use strict"; // treat all JS Code as newer version.

// alert(3 + 3) // we are using nodejs, not browser.

// code readability should be high.

let bigNumber = BigInt(186465165465621656565656556498621654698562354987956126516849586135462132n);
let Name = "Nitish"
let lastName = 'Kumar'
let age = 25
let village;
let country = null;

// console.table([bigNumber, Name, lastName, age, village, country]);


function name_fn(params) {
    
   return params + 1;
}
let function_Name = name_fn(5)

// console.log("Result : ", function_Name);

// console.log(typeof function_Name);  // number
// console.log(typeof name_fn);  // function / function object


/*
number => 2 to power 53  || type -> 'number'
bigNumber = BigInt(3564656165462321656231265621165161);  => for big number || type -> 'BigInt' 
string => "",'' || type -> 'string'
boolean => true/false || type -> 'boolean'
null => standalone value, representation of empty value, or we can assign also to null value || type -> 'object'
undefined => value not assigned || type -> 'undefined'
symbol => unique, use to defined uniqueness || type -> symbol

object || type -> object
array || type -> object
function || type -> function / function object

*/ 