const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)  // here .push() methods can  push anything in an array object even array also.
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log("**************************************");

const marvel_heros_1 = ["thor", "Ironman", "spiderman"]
const dc_heros_1 = ["superman_1", "flash_1", "batman_1"]
const dc_heros_2 = ["superman_2", "flash_2", "batman_2"]
const dc_heros_3 = ["superman_3", "flash_3", "batman_3"]

const all_heros_value = dc_heros.concat(dc_heros_1.concat(dc_heros_2.concat(dc_heros_3)));
// console.log(all_heros_value);  // return all value in a single array
// console.log(typeof all_heros_value);  // object
// console.log(...dc_heros,...dc_heros_1,...dc_heros_2,...dc_heros_3);


const allHeros = marvel_heros_1.concat(dc_heros_1)
// console.log(allHeros);
// console.log(allHeros[3][1]);
// console.log("**************************************");

/*                 Note :- 
-> .push() method directly push the value as it in present like if they are present in array then they push the whole array like a single value in another array and return an array inside an array like array object.
-> .concat() methos also push all the value in an array but individually in a new array object. 
-> [...arrayName_1, ...arrayName_2, ...arrayName_3] -> also known as spread operator which spread all the values present in multiple arrays but not spread the values present array inside in an array inside an array.
-> .flat(depth) method spread all values which is not done by spread operator.  Here "depth" -> means how many penitration i.e array inside array inside array need to be done.

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
const score2 = 200
var score3 = 300
const arr = [1,4,5]
let obj = { key_1: "values_1",key_2: "values_2",key_3: "values_3"}

// console.log(Array.of(score1, score2, score3, arr, obj));  // Array.of(values) method store and return all values into a new array. Here 'values' -> A set of elements which may be a variables_value, arrays_value, obaject_value...etc. 

