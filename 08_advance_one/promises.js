// const promise1 = new Promise((resolve, reject) => {
//     // Do an async task
//     //DB calls, cryptography, network
//     setTimeout(() => {
//         console.log('async task completed !!');
//         resolve()
//     }, 1000)
// })

// promise1.then(() => {
//     console.log('Promise Consumed !!');
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('ASYNC TASK 2');
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log('Async 2 resolved !!');
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: 'arpan', email: 'arpan@firefox.com' })
//     }, 1000)
// })

// promise3.then((user) => {
//     console.log(user);
// })

// const promise_four = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ username: 'mehta', email: 'mehta@abc.com' })
//         } else {
//             reject('ERROR 505 : SERVER ERROR')
//         }
//     }, 1000)
// })

// promise_four
//     .then((user) => {
//         return user.username
//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch((err) => {
//         console.log(err);
//     }).finally(() => console.log('The Promise is either resolved or rejected !!'));

// const promise_five = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: 'He', email: 'he@kpop.com' })
//         } else {
//             reject('ERROR : Something is not right !!')
//         }
//     }, 1000)
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promise_five
//         console.log(response);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')                                                            
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.error(error))                               