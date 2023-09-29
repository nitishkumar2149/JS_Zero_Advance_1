/* 
    .forEach() method will not return anything.

    .filter() method will return value.

    Arrow function defination types :-

      1.   () => {}       // use for multiple line and required to write "return" keyword.
      2.   () =>          // use for single line and not required to write "return" keyword.
      3.   () => ()       // use for multiple line and not required to write "return" keyword.
      4.   () => ({})     // use for multiple line and required to write "return" keyword.
   
 */

const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {                 /// using .forEach() method
    // console.log(item);
    // return item               // Does not return anything.
} )
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {                /// using .filter() method 
//     return num > 4
// } )

// const newNums = myNums.filter( (num1) => num1 > 4)           /// using .filter() method  
const newNums = myNums.filter( (num1) => (num1 > 4))           /// using .filter() method  

// console.log(newNums);


const newNums_1 = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums_1.push(num)
    }
} )
// console.log(newNums_1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.filter( (BK) => {
//     if(BK.publish >= 2000)
//     return BK;
// })

const userBooks_1 = books.filter( (BK) => { return BK.publish >= 2000})
console.log(userBooks_1);

const userBooks = books.filter( (BK) => { return BK.publish >= 1995 && BK.genre == 'History'})
// console.log(userBooks);