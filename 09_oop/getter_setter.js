class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email
    }

    set email(val){
        this._email = val
    }

    get password(){
        return this._password + 'pqrst'
    }

    set password(val){
        this._password = val
    }
}

const ram = new User('ram@email.com','abc')
console.log(ram.email);
console.log(ram.password);