let myName = 'Arpan     '


// console.log(myName.arpan());




let myGames = ['PUBG','FIFA 24']


let gameGenre = {
    'PUBG': 'Shooting',
    'FIFA 24': 'Sport',
    
    getFifaGenre: function(){
        console.log(`FIFA 24 Genre is ${this["FIFA 24"]}`);
    }
}

Object.prototype.arpan = function (){
    console.log('Arpan is watching you !!');
}
Array.prototype.hiArpan = function(){
    console.log('Arpan says Hi !!');
}

// gameGenre.arpan()
// gameGenre.hiArpan()//not accessible
// myGames.arpan()
// myGames.hiArpan()
// myName.arpan()



//Inheritance
const User = {
    name: 'Sanjay',
    email: 'sanjaylal@google.org'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignemnt: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User
//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()

'Arpan'.trueLength()
'IcedTea'.trueLength()