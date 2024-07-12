// object literals

// const mySym = Symbol("Key1")

// const user = { //Object literals
//     name: "Arpan",
//     "full name": "Arpan Malaviya",
//     [mySym]:"mykey1", //Symbol
//     age: 21,
//     location: "NY",
//     email: "user2@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ['Monday','Saturday']
// }
// console.log(user["age"]);
// console.log(user["full name"]);
// console.log(user[mySym]); //Symbol

// user.email = "user@github.com"
// Object.freeze(user) //makes the object unmodifyable
// user.email = "user@ac.in"
// user["name"] = "ABC"

// console.log(user);

// user.login = function(){
//     this.isLoggedIn = true
// }

// user.login()

// console.log(user);

// ---------------------------------------------------

//singleton
// const bgmiusers = new Object() 
// bgmiusers.charId = 23234453
// bgmiusers.name = "Mosambi"
// bgmiusers.isPlaying = false
 // console.log(bgmiusers); 

//non-singleton
// const regUser = { 
//     email:"naki@fmail.com",
//     fullname:{
//         fname: "Arpan",
//         lname: "Malaviya"
//     }
// }
// console.log(regUser.fullname.fname);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {21:"z",22:"y"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign(obj1,obj2) //value of main obj will be modified
// console.log(obj3);
// console.log(obj1);

// const obj3 = Object.assign({},obj1,obj2) //value of main obj will not be modified
// console.log(obj3);
// console.log(obj1);

// const obj3 = {...obj1,...obj2}
// console.log(obj3);
// console.log(obj1);

// console.log(bgmiusers);
// console.log(Object.keys(bgmiusers));
// console.log(Object.values(bgmiusers));
// console.log(Object.entries(bgmiusers));

// console.log(bgmiusers.hasOwnProperty('isPlaying'));
// console.log(bgmiusers.hasOwnProperty('isLoggedin'));

