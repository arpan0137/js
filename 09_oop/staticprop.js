class User {
    constructor(username){
        this.username = username
    }

    logIn(){
        console.log(`${this.username} loggedin successfully`);
    }

    static createId(){
        return `1243`
    }
}

const arpan = new User('arpan')
// console.log(arpan.createId())//not accessible


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}


const Konika = new Teacher('konika','konika@gmail.com')
// console.log(Konika.createId()); //not accessible
Konika.logIn()