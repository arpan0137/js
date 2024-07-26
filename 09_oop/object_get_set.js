const User = {
    _email : 'herp@kp.com',
    _password : 'pwd',

    get email(){
        return this._email
    },

    set email(val){
        this._email = val
    },
}

const tomato = Object.create(User)
console.log(User.email);