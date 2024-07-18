// const nums = [1,5,7,9,13]

// const total = nums.map((num) => num + 10)
// const newNums = nums
//     .map((num) => ( num*10 ))
//     .map((num) => ( num - 1 ))
//     .filter((num) => ( num > 50 ))

// console.log(newNums);


// const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = myNums.filter((num)=>(
//    num > 4
// ))

// console.log(newNums);


// const books = [
//     { title: 'One', genre:'Fiction', publish:1997, edition:2003 },
//     { title: 'Two', genre:'GK', publish:1998, edition:2007 },
//     { title: 'Three', genre:'History', publish:1999, edition:2012 },
//     { title: 'Two', genre:'Programming', publish:2006, edition:2024 },
// ]
// const userBooks = books.filter( (bk) => bk.publish > 1996 && bk.publish != 1998 )
// console.log(userBooks);


// const advNums = [1,2,3,4,5,6]

// const tot = advNums.reduce( (acc,curr) => acc * curr, 1 )
// console.log(tot)

const cart = [
    {
        itemName: "shampoo",
        qty: 100,
        price: 50000
    },
    {
        itemName: "soap",
        qty: 100,
        price: 10000
    },
    {
        itemName: "face wash",
        qty: 200,
        price: 70000
    },
    {
        itemName: "shoes",
        qty:100,
        price: 80000
    },
]

const totItems = {}
const totPrice = cart.reduce( (acc,curr)=>acc+curr.price,0 )
const totQty = cart.reduce( (acc,curr)=>acc+curr.qty,0 )

totItems.price = totPrice
totItems.qty = totQty

console.log(totItems)