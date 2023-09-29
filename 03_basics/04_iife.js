/* 
    =>  Define IIFE -> IIFE stands for Immediately Invoked Function Expressions which is used to prevent the pollution from global scope variables.
    => ()();   -> Here, inside 1st (), we use it for decleration and 2nd () is used for execuation.

*/


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Nitish');