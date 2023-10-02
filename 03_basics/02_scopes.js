/*
   1. Scopes are Two types :-
        a. Global Scope
                eg : var , any variable that we just use without declaring any variable type then by default that variable get "Globle scope".
        b. Local/Block level scope -> within -> {} i.e within curly braces in if/else block, any type of loop, function, etc. (Note : Object curly braces is not included.).
                eg : let, const  

   2. !!!IMPORTANT!!! => Global Scope in browser console and node environment console(like in VS code, or any application compiler) is different.
   3. Global Scope can be access everywhere inside function also.
*/

//var c = 300  
let a = 300
if (true) {
    let a = 10   
    const b = 20
    // console.log("INNER: ", a);  
}
// console.log(a);
// console.log(b);
// console.log(c);

//   **********    Nested Scope    **********

function one(){
    const username = "Nitish"
        function two(){
            const website = "Youtube"
            console.log(username);  // Executed due to username is global variable.
    }
    // console.log(website);  // after one() call, 1st this line execute and give ERROR due to website is undefined.
     two()
}
// one()

if (true) {
    const username = "Nitish"
    if (username === "Nitish") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(1)) // Line 51 and 55 both able to execute but not print anywhere because here function return value is not store at any variable.
function addone(num){
    return num + 1
}
// addone(6);

// ------------------------- HOISTING (Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.) -----------------------------

// console.log(addTwo(5))         //  This will give ERROR due to Hoisting because addTwo()/addTwo variable is not defined before function call
const addTwo = function(num){     //  function declaration  
    return num + 2
}
// console.log(addTwo(5))         //  function call/execute function. This will Executed sucessfully.