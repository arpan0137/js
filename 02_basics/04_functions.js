// function addTwoNos(n1, n2) {
//     console.log(n1 + n2);
// }

// addTwoNos(5, 6)

// rest operator
// const calculateCartPrice = (...items) => {
//     let total = 0
//     items.map((item) => {
//         total += item
//     })
//     return total
// }

// console.log(calculateCartPrice(100, 200, 300, 400));

//Passing Object to the function as parameter
// const user = {
//     username: "Kaalin",
//     pwd: "munna"
// }

// function handleObject(anyObj = { username: "abc", pwd: '123' }) {
//     console.log(`username is ${anyObj.username} and password is ${anyObj.pwd}`);
// }
// // handleObject()
// handleObject(user)

// const myNewArr = [600, 200, 150]

// passing array as parameter to function
// function returnSecondVal(getArray) {
//     return getArray[1]
// }

// console.log(returnSecondVal(myNewArr));

// ---------------------------------------
// Arrow Function

// const addTwo = (n1, n2) => n1 + n2 //implicit return

// console.log(addTwo(50, 40));


//---- Immediately Invoked Function Expression (IIFE)

(function chai() {
    //named IIFE
    console.log(`Chai piyo biscuit khao`);
})();

(() => {
    //unnamed IIFE
    console.log('ok');
})()
