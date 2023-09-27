// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString);
// console.log(typeof myDate);  // typeof Date() -> object 

// let myCreatedDate = new Date(2023, 0, 23)  // to ccreate date.
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // Note month will start from 0 when we write in single digit -> i.e.  for Jan.
// let myCreatedDate = new Date("2023-01-14")    // But when we try to wrte date in yyyy-mm-dd then we need to give for mm from 01 for Jan.
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());



// let myTimeStamp = Date.now()  // Date.now() will give adject time of now in milli seconds.

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  // Here .getTime() is used to get date/time in a number so that we can compare two date/time.
// console.log(Math.floor(Date.now()/1000));  // here Math.floor(Date.now()/1000) is used to convert to seconds/or make it smaller value.

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {  // this ***** IMPORTANT Topics ***** Read it more, also used for customized date as required.
    weekday: "long",
    
})