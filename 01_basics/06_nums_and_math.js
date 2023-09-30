// +++++++++++++ Number +++++++++++++++++++++++++++++
const score = 400
// console.log(score);

const balance = new Number(100.654955)
// console.log(balance);

// console.log(balance.toString().length);  // Here .toString() will convert it into string, so that we can apply string methods on a number also.
// console.log(balance.toString().includes(10)); // Here .includes() is used to find any similar string value that tey present or not.
// console.log(balance.toFixed(2));  // Here .toFixed() is used to show how many digit available after decimal place. 

const string_Number = "101asc";
const string_to_Number = Number(string_Number)   /// Number() -> Convert string to Number.
// console.log(typeof string_Number)            // o/p -> string 
// console.log(string_Number)                   // o/p -> 101asc
// console.log(typeof string_to_Number);        // o/p -> number 
// console.log( string_to_Number);              // o/p -> NaN     ----> ?????????????


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // to give precise value in that number of digit that you have asked. *********************

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // to convert the value to read and look make easy, .toLocaleString('en-IN') -> Used for INDIAN Standard.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // Here Math.abs() will make a -ve value in +ve value.
// console.log(Math.round(4135.511111)); // Here Math.round() make number to round figure into a number without decimal.
// console.log(Math.ceil(4.2));  // Here Math.ceil() make number to it's nearest top value when we give any decimal digit.
// console.log(Math.floor(4.9)); // Here Math.floor() make number to it's nearest lowest value when we give any decimal digit.
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());  // For Math.random() -> value always lie between 0 and 1 & on every search/run value get changed.
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)