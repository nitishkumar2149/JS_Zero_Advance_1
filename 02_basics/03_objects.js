// singleton -> When we create any object using constractor then singleton object created.
//           -> Note : when we create/declared object using literal, that is not create singleton object.
// Object.create  -> is used to create object using constractor method, also able to create singleton.
/*
        # Object can be declared by two ways :-
            1. Literal      -> const JsUser = {} is a Litral method.  -> Not able to create singleton.
            2. Constractor  -> Object.create is a constractor method. -> Able to  create singleton. 
*/
// object literals

const mySym = Symbol("Key_Value")  ///***  Here we defining a symbol and passing some value.

const JsUser = {
    name: "Nitish",
    "full name": "Nitish Kumar",
    [mySym]: "mykey1",     ///////// IMPORTANT SEE ONE MORE TIME. AT 3:54:00 . IN part 1.  // this is the way to access a value into a symbol datatype.
    age: 24,
    location: "Sitamarhi",
    email: "nitishkumar2149@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   /// object_name.Key_Name -> dot notation methos to access value from an object and always try this method.
// console.log(JsUser["email"])  ///  object_name["Key_Name"] -> also use square bracket in double cottation as a string is used to access the value of an object.
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(mySym)
// console.log(typeof JsUser[mySym])
// console.log(typeof [mySym])
// console.log(typeof mySym)

const my_key_name = Symbol("Key_value");	// here we using -> Symbol() function/method

const object_name = {
    [my_key_name] : "value",
    my_id : "one",
}  

// console.log(object_name.my_key_name);            // undefined because my_key_name inside object is not found.
// console.log(object_name[my_key_name]);           // value
// console.log(my_key_name);                        // Symbol(Key_value)

// console.log(typeof object_name.my_id);           // string
// console.log(typeof [my_key_name]);               // object
// console.log(typeof object_name[my_key_name]);    // string
// console.log(typeof my_key_name);                 // symbol


JsUser.email = "test@chatgpt.com"
// Object.freeze(JsUser)    ///////////// .freeze(pass_here_object_name)  -> to stop the permission to do any changes inside that object for any key-value pair.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// console.log(JsUser.greeting); // In this, after execution we get that function is not executed but we get function refrence.
// console.log(JsUser.greeting());  // In this, after execution, function get executed and get o/p.

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());