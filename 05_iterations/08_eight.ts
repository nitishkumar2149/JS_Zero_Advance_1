// .reduce() method :-

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 1
    },
    {
        itemName: "py course",
        price: 2
    },
    {
        itemName: "mobile dev course",
        price: 3
    },
    {
        itemName: "data science course",
        price: 4
    },
]


const priceToPay = shoppingCart.reduce( (acc, curr) => acc + curr.price, 0)
// console.log(priceToPay);

const items = shoppingCart.map( (item)=> item.itemName)
// console.log(items)           // return only the itemName in an array.

const items_1 = shoppingCart.filter( (item)=> { return item.itemName})
// console.log(items_1)          // return the whole object.

const items_2 = shoppingCart.filter( (item)=> { return item.itemName === "mobile dev course"})
// console.log(items_2)      // return the item that i want.
