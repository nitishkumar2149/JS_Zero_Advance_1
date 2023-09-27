// console.log(2 > 1);  //true
// console.log(2 < 1);  //false
// console.log(2 >= 1);  //true
// console.log(2 <= 1);  //false
// console.log(2 == 1);  //false
// console.log(2 != 1);  //true
// console.log("*****************************************")
// console.log("2" > 1);  //true
// console.log("2" < 1);  //false
// console.log("2" == 1);  //false
// console.log("2" != 1);  //true
// console.log("2" >= 1);  //true
// console.log("2" <= 1);  //false
// console.log("*****************************************")

// console.log(null > 0); //false
// console.log(null < 0);  //false
// console.log(null >= 0);  //true
// console.log(null <= 0);  //true
// console.log(null == 0);  //      Exception Case : false (Because null is not adjectly 0)
// console.log(null != 0);  //      Exception Case : true (Because null is not adjectly 0)
// console.log("*****************************************")

// console.log(undefined > 0); //false
// console.log(undefined < 0);  //false
// console.log(undefined >= 0);  //false
// console.log(undefined <= 0);  //false
// console.log(undefined == 0);  //false  
// console.log(undefined != 0);  //      Exception Case : true (Because null is not adjectly 0)

/*
The reasion is that 
an equality check == 
and comparisions check > < >= <= work differently.

Comparisions convert null to a number, treating it as 0.
*/