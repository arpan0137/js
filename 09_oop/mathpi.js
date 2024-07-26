// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);
// console.log(Math.PI);

const dip = {
    name:'dip patel',
    age:59,
    isAvailable: true,

    callDip: function(){
        console.log('Dip not found !!');
    }
}
// console.log(Object.getOwnPropertyDescriptor(dip,'name'))
// Object.defineProperty(dip,'name',{
    // writable: false,
    // enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(dip,'name'))

for (let [key, val] of Object.entries(dip)) {
    if(typeof val !== 'function'){
        console.log(`${key} : ${val}`);
    }
}