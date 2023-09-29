const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){    // this is a callback function and callback function is always anonymous ( No function name).
    // console.log(val);
} )

coding.forEach( (item) => {         ////   !!!!!!!!!!!  =>>>>>> BEST METHOD.
    // console.log(item);
} )

function printMe(item){   // printMe() -> they just take value from array and print them only.
    // console.log(item);
}
coding.forEach(printMe)   // But to execute, we need .forEach(printMe) , Here printMe taken as a refrence only.

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

const myCoding = [                 // Array -> Object hai
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (Nitish) => {
    // console.log(Nitish.languageName);
    // console.log(Nitish.languageFileName);
    // console.log(Nitish.languageName,"-",Nitish.languageFileName);
    // console.log(`${Nitish.languageName} - ${Nitish.languageFileName}`);
})

