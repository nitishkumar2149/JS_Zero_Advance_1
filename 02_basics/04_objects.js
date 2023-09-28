// const tinderUser_1 = new Object()  // singleton object hai.  // cretated using constructor 
// console.log(tinderUser_1);

const tinderUser = {}        // non sigleton object hai.  // created without using constructor
// console.log(tinderUser);

tinderUser.id = "20263115"
tinderUser.name = "Nitish"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nitish",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // due to this all whole object get into an empty /target object in an object formate.
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Object.assign() is a static method in which all the elements/properties of source object get into an emtyp->{} object / target object and  return the taget object. 

const obj3 = {...obj1, ...obj2, ...obj4} // here we using spread operator // most convient and most recent technology/method to combine a lot of object into a target object.
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));      //here Object.keys(object_name) method return all keys of an object in an array.
// console.log(Object.values(tinderUser));    //here Object.values(object_name) method return all values of an object in an array.
// console.log(Object.entries(tinderUser));      //here Object.entries(object_name) method return all keys and values of an object in an array and also all object which is already converted into an array is come into a big array.

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // object_name.hasOwnProperty('property_name_that_we_need_to_ask') -> For checking of any property of that object and prevent fom crashing the code.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

// console.log(course.courseInstructor)  /// normal wat to access any value from an object

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course  /// const {key_Name_of_an_Object : any_name_as_we_want} = object_name  => This is a modern way to accesss access any value from an object.
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]