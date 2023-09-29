/**
          For loop structure :-
          ---------------------

          for (let index = 0; index < array.length; index++) {
               const element = array[index];
    
               }
               
 */

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
}

//*************************** Array *************************

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


// *******************  break and continue ************************

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break                                 // come outside the loop.
    }
//    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue                                 // continue skip the just next execuation 1 time. 
    }
   console.log(`Value of i is ${index}`);
}