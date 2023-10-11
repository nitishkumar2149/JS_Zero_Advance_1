// let myName = "nitish     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.nitish = function(){      // here we adding some extra properties to the "object" using "Object.prototype.anyNameAsWeWant" = function definiation.
    console.log(`nitish is present in all objects`);
    this.getSpiderPower();
}

Array.prototype.heynitish = function(){    // here we adding some extra properties to the "array" using "Array.prototype.anyNameAsWeWant" = function definiation.
    console.log(`nitish says hello to Array`);
   
}

// heroPower.nitish()
// myHeros.nitish()  ///////  I NEED MORE CLEARITY.
// myHeros.heynitish()    // It will be executed because I have added properties to Array and also try to access Array. 
// heroPower.heynitish()  // it will give Error because , I have added properties to Array but try to access Object.

                              
                            // ************ Inheritance ***************

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

Teacher.__proto__ = User
// console.log(Teacher.makeVideo);
// console.log(Teacher.name);  // Yes, we can access the key and values of User Object inside Teacher Object.
// console.log(Teacher.email);
// console.log(User.email);
// console.log(User.makeVideo); // we cann't access properties of Teacher inside User object here.

// User.__proto__ = Teacher // we cann't do this because Teacher object already inherit the properties from User Object. 
// console.log(User.makeVideo); // ERROR due to above code/ Cycling  inhertance of object.


const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport     // Here we can linking two object i.e TeachingSupport to TASupport using => __proto__: object_name
}

// console.log(TASupport.makeAssignment);
// console.log(TASupport.fullTime);
// console.log(TASupport.isAvailable); // we can access here key and value of other object = TeachingSupport.

// console.log(TeachingSupport.isAvailable); 
// console.log(TeachingSupport.fullTime); // we can  not access here key and value of object = TASupport because I have not inherit / interlinked the properties ofTASupport inside TeachingSupport Object.

//----------------------------------------------------------------

String.prototype.stringKaLengthNikalnaHai = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

// let anotherUsername = "ChaiAurCode     "
// anotherUsername.stringKaLengthNikalnaHai()

"ChaiAurCode      ".stringKaLengthNikalnaHai()
"Nitish Kumar".stringKaLengthNikalnaHai()
" iceTea".stringKaLengthNikalnaHai()
