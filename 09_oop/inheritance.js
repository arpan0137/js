class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const PJ = new Teacher('PJ','pj@teacher.com','abc')
PJ.logMe()
PJ.addCourse()

const rashmin = new User('rashmin')
rashmin.logMe()