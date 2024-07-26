//ES6
// class Animal{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}12bcd321`
//     }

//     capitalizeName(){
//         return this.username.toUpperCase()
//     }
// }

// const tiger = new Animal('tiger','tiger@gmail.com','erfg')
// console.log(tiger.capitalizeName());


// behind the scene
// function Animal(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
// }

// Animal.prototype.encryptPassword = function(){
//     return `${this.password}12bcd321`
// }
// Animal.prototype.capitalizeName = function(){
//     return this.username.toUpperCase()
// }

// const lion = new Animal('lion','lion@gmail.com','erfg')

// console.log(lion.encryptPassword());
// console.log(lion.capitalizeName());
