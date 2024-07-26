function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email
        },
        set: function(val){
            this._email = val
        }
    })
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password
        },
        set: function(val){
            this._password = val
        }
    })

}

const ramesh = new User('ramesh@pqr.com','pqr')

console.log(ramesh.email);