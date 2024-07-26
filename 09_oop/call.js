function setUsername(username){
    this.username = username;
    console.log('called');
}

function createUser(username, email, password){
    setUsername.call(this,username)
    this.email=email;
    this.password = password;
}

const vivek = new createUser('Vivek','vivek@chatgpt.com','1234')
console.log(vivek);