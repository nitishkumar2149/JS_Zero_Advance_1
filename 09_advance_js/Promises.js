//--------------------#1----------------------
// const promise_One = new Promise(function(resolve, reject){
//     setTimeout( function(){
//         console.log("Promise_One Done.")
//         resolve()
//     }, 1000)

// })
// promise_One.then(function(){
//     console.log("Promise_One Consumed.")
// })

//---------------------#2---------------------
// const promise_One = new Promise(function(resolve, reject){
//     setTimeout( function(){
//         const value = false;
//         if(value == true){
//             console.log("Promise_One Done.")
//             resolve()
//         }else {
//             console.log("Promise_One not done.")
//             reject()
//         }
//     }, 1000)

// })
// promise_One.then(function(){
//     console.log("Promise_One Consumed.")
// }).catch(function(){
//     console.log("ERROR!!! Something Went Wronge.")
// })

//---------------------#3------------------------------
// const promise_One = new Promise(function(resolve, reject){
//     setTimeout( function(){
//         const value = true;
//         if(value){
//             console.log("Promise_One Done.")
//             resolve()
//         }else {
//             console.log("Promise_One not done.")
//             reject()
//         }
//     }, 1000)

// })
// promise_One
// .then(function(){
//     console.log("Promise_One Consumed.")
// })
// .catch(function(){
//     console.log("ERROR!!! Something Went Wronge.")
// })
// .finally(function(){
//     console.log("The promise is either resolved or rejected")
// })

//-----------------------#4--------------------------------
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "Nitish", password: "123456"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username  // in this username will print in next chain .then()
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))






//**********************************************************/

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

//--------------------------------------------------------------------------
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "Nitish", password: "12345"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

//-----------------########### 5 ##########------------------------------

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } 
//     catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

//------------------------ Here we faching data using async, fetch, try and catch method ----------------------

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers();

//---------------------- Here we faching data using .then, .catch method----------------------------------

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.