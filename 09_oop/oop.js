const user = {
    username: 'arpan',
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){ //Object Literal
        // console.log('Got user details !!');
        console.log(`Username: ${this.username}`);
    }
}
// user.getUserDetails()

// const promise1 = new Promise()

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

const userOne = new User('arpan','56',false)
const userTwo = new User('abc','156',false)

console.log(userOne.username);
console.log(userTwo.username);