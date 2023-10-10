/*
              Abou "new" keyword :-
              ======================
              -> "new" keyword is a constractor function.
              -> Constructor Function i.e 'new' keyword allow us to create multiple instances from a single object. (Here instunce means allocate a new position in a memory)
              
         Steps that occuring during use of 'new' and 'this' keyword:-     
              1.-> when we use 'new' keyword then an empty object i.e {} created.
              2.-> constructor function will be call due to 'new' keyword means all arguments will be provided.
              3.-> due to 'this' keyword, all arguments get injected.
              4.-> we get value in function.

*/


const user = {
    username: "nitish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

//--------------------------------------- USE OF "this" Keyword ----------------

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this  // if we not write then also it execute by bydefault.
}

const userOne = new User("Nitish", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);
// console.log(userOne);
console.log(userTwo instanceof User);
console.log(userTwo instanceof Object);


