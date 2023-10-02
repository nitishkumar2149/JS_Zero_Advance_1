/**
    => "this" keywoard refer current context means able to access the value of a keys/values that present inside thier scope like inside object/array.
    => In browser, the global object is "window object". -> When we try to access : console.log(this);
    => In node like VS Code, the globle object is empty i.e {} -> when we try to access : console.log(this);
 */

const user = {
    username: "Nitish",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);     // access block level context.
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // access global context.

function chai_1(){                         // ******* Function Definig 1st Type *******
    let username = "Nitish"
    // console.log(this.username);  // not able to access username using this keywoard because "this" keyword is able to access either current contect of object or access global context.
    // console.log(username); 
    // console.log(this);
}
chai_1()

const chai_2 = function () {               // ******* Function Definig 2nd Type *******
    let username = "Nitish"
    // console.log(this.username);
    // console.log(this)
}
// chai_2()

const chai_3 =  () => {                      // ******* Function Definig 3rd Type *******
    let username = "Nitish"
    // console.log(this.username);
    // console.log(this)                    // empty i.e -> {}
}
// chai_3()


/*
    How Arrow Function Evolve :-

      () => {}                                              : This is basic syntax.

      const arrowFunction = () => {}                        : Here we are storing arrow function into a variable.

      const arrowFunction = (num1, num2) => {               : Here we passing parameters and returning some thing.
        return num1 + num2
      }   

      const arrowFunction = (num1, num2) => num1 + num2     : This type is called as Implicit Return. In this we do not required to write "{}" and "return" because they assume that this is "one line code" only.     

      const arrowFunction = (num1, num2) => (num1 + num2)   : When we use round bracket i.e () then not required to write "return" keyword but required in curly braces i.e "{}".

      const arrowFunction = (num1, num2) => ({username : "Nitish Kumar"}) : To return object we reuired  -> ().
 */



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2    // Implicit Return

// const addTwo = (num1, num2) => ( num1 + num2 )   // when we use round bracket i.e () then not required to write "return" keyword.

// console.log(addTwo(4 , "1"))

// const addTwo = () => ({username: "Nitish"})  // to return object we reuired  -> ().

// console.log(addTwo(4 , "1"))
// console.log(addTwo())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()