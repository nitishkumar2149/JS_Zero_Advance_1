const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)  // here .push() methods can  push anything in an array object even array also.
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log("**************************************");

const marvel_heros_1 = ["thor", "Ironman", "spiderman"]
const dc_heros_1 = ["superman", "flash", "batman"]
const allHeros = marvel_heros_1.concat(dc_heros_1)
// console.log(allHeros);
// console.log(allHeros[3][1]);
// console.log("**************************************");

/*                 Note :- 
.push() method directly push the value as it in present like if they are present in array then they push all the value in a single array in another array object.
.concat() methos also push all the value in an array but individually in a new array object. 
[...arrayName_1, ...arrayName_2, ...arrayName_3] -> also known as spread operator which spread all the values present in multiple arrays but not spread the values present array inside in an array inside an array.

.flat(depth) method spread all values which is not done by spread operator.

*/


const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const all_values = [...marvel_heros, ...dc_heros, ...another_array]
// console.log(marvel_heros);
// console.log(dc_heros);
// console.log(another_array);
// console.log(all_values);  // here we seee that values present array inside an array inside an array will not spread.


const real_another_array = another_array.flat(Infinity)  // .flat(depth) method spread all values.
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))  // Array.isArray("value") method will tell me that the "value" that i am asking is an array or not.
const converted_Array = Array.from("Hitesh"); //  Array.from("value") method, convert that value into an array.
// console.log(converted_Array);  
// console.log(Array.isArray(converted_Array));
// console.log(Array.from({name: "hitesh"})) // interesting  => it gives empty array because we need to tell them that how they will convert them into an array by using "key" or by using "value".

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));  // here Array.of(value) method also convert values into a new array. Here value -> A set of elements which may be a variables, arrays, ..etc.  