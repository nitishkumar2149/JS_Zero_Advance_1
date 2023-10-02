
function sayMyName(){           // Definiation
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("S");
    console.log("H");
}

//sayMyName                     // Reference
// sayMyName()                     // Execution

function addTwoNumbers(number1, number2){     // here -> number1, number2 are  "parameters" and in JS, it does not required it's type definiation.
    let a = console.log(number1 + number2);
}
// addTwoNumbers(1,"2"); //  Here 1, "2" are arguments. // here 1 and 2 both get taken into as a string. This is done by JS automatically.


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(1,"2")

// console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return                                        // After writing this "return" without any value then it return undefined and also stop the execution of line no. - 37.
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())  // here we are not passing any value.


function loginUserMessage(username = "Default_Name"){
    if(!username){                                         // Never run this if statement because username never empty.
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())  // here we not passing any value then default value print.
// console.log(loginUserMessage("Nitish"))


function calculateCartPrice(_val1, _val2, ...num1){  // here val1 taken 200, val2 taken 400 and rest all amount return by ...num1 in a bundal of an array formate.
    return num1                                     // here "..." -> also called as rest operator, it return all values in bundal of an array.
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 600))

const user = {
    username: "Nitish",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  // Back-tick -> ``, we can write anything inside back-tick and also take any variable like this formate -> ${any_variable_name}
}
// handleObject(user)


// handleObject({   // ****************** !!!!  Here we are directly passing object inside a function at the time of function call.
//     username: "Amit",
//     price: 499
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000])); // ****************** !!!!  Here we are directly passing array inside a function at the time of function call.