/*
            ************       Arrays       *************

            => In an array object, we can store multiple items of different datatypes in a single variable. eg. -> let multipleElements = [1, 2, 5, 'n', "h", "Nitish", null, undefined, "true", 0, "false", [1, 8, "h", "jhdvc"]];
            => JS arrays are resizable even after declaration.
            => In JS, array value is access by thier index and index start from 0,1,2,3,....
            => In JS, array-copy operation create shallow copies( A shallow copy of an object is a copy whose properties share the same references. ) not deep copy( A deep copy of an object is a copy whose properties do not share the same references. ).
*/
let multipleElements = [1, 2, 5, 'n', "h", "Nitish", null, undefined, true, 0, false, [1, 8, "h", "jhdvc"]];
let value = multipleElements[11];
// console.log(multipleElements[11]);
// console.log(typeof value);
// console.log(multipleElements.length)

const myArr = [0, 1, 2, 3, 9, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  // .push() -> push method will add that value in an array.
// myArr.push(7)
// myArr.pop()    // .pop() -> pop method will remove the last value from that array.

// myArr.unshift(9)  // .unshift() -> unshift method add the value at '0' index in that array and due to this in backend all the previous value present in that array shifted forward, this maker the "system slow". So, This is "not good approch".
// myArr.shift()     // .shift()  -> shift method remove the value that present at '0' index.


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


const newArr = myArr.join()  // .join() -> join method convert the array object into string.
// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);


// ************************* slice, splice *************************

const myOriginalArr = [10, 1, 2, 3, 4, 5]
// console.log("A ", myOriginalArr);  //Expcted o/p -> A [10, 1, 2, 3, 4, 5]

const myFirstArr_A = myOriginalArr.slice(1, 3)  // here .slice(n1, n2)  -> Slice method will return value from n1 index to (n2-1) index and it will not affect the original value.
// console.log(myFirstArr_A);  //Expcted o/p -> [1, 2]

// console.log("B ", myOriginalArr);   //Expcted o/p -> B [10, 1, 2, 3, 4, 5]
const mySecondArr_B = myOriginalArr.splice(1, 3)   //Here .splice(n1, n2) -> Splice method will return value from (n1 to n2) index and it will also remove those value present in original array from (n1 to n2) index. 
// console.log(myFirstArr_A);  //Expcted o/p -> [1, 2]
// console.log(mySecondArr_B);   //Expcted o/p -> [1, 2, 3] 

// console.log("C ", myOriginalArr);   //Expcted o/p -> C [10, 4, 5]




