const myName = "Nitish"
const repoCount = 7
// console.log(myName + repoCount + " Value");
// console.log(`Hello Friends, My Name is ${myName} and my total repo count till now is ${repoCount}.`);

const gameName = new String('Nitish_hc_com')
let string_Count = gameName.split("");

// console.log(gameName[1]);
// console.log(typeof string_Count);
// console.log(gameName.__proto__);


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4);  /////////// we can use -ve value also.
// console.log(anotherString);

const newStringOne = "   Nitish    "
// console.log(newStringOne);
// console.log(newStringOne.trim());   ///// to remove sapace at start and end.

const url = "https://nitish.com/nitish%20kumar"

// console.log(url.replace('%20', '_'))   //// to replace any thing

// console.log(url.includes('sundar'))    /// to check any thing in that string that they are present in that string or not

// console.log(gameName.split('_'));
let a = "ramshyammoham_ruam_dytamky";
// console.log(a.split("am"));

// ***********8 Checking concat() method ************8

const string_1 = "Nitish"
const string_2 = "Kumar"
const string_3 = "."
const result_string = string_1.concat(string_2.concat(string_3));  // concat method just combined all the values into a new string and return that new string.
const result_string_usingSpreadOperator = [...string_1, ...string_2, ...string_3] // spread operator which spread all the character values present in multiple strings and return in a new array.
// console.log(result_string);
// console.log(typeof result_string);
// console.log(result_string_usingSpreadOperator);
// console.log(typeof result_string_usingSpreadOperator);
