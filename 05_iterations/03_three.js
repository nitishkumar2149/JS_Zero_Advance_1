// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// **********************************************   Maps  ****************************
/*
       Map : Map is an object in JS which hold key-value pairs and remember thir original insertion order of the keys.
           : It is unique in the Map's collection.
 */


const map = new Map()                  // Defining "MAP"
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {                // !!!!!!! IMPORTANT -> Appling for-of loop on "MAP".
    // console.log(key, ':', value);
    // console.log(`${key} : ${value}`);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {        // !!!!!!! Object is not Iterable in this method or using for-of loop.
//     // console.log(key, ':', value);          // this will through ERROR
//     // console.log(`${key} : ${value}`);      // this will through ERROR
// }

for (const key in myObject) {                      // !!!!!!! Object is Iterable using for-in loop.
    // console.log(`${key} : ${myObject[key]}`);   //  we have to take -> object[key]
    // console.log(`${key} : ${myObject}`);        //  it will return only object-object in place of value.


}