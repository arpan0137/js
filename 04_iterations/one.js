//for of

// const arr = [1,2,3,4,5]
// for (const ele of arr) {
//     console.log(ele);
// }

// const name = "Arpan"
// for( const char of name ){
//     console.log(char);
// }


// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('FR',"France")
// console.log(map);
// for (const [key,val] of map) {
//     console.log(key, ':-',val);
// }


// const myObj = {
//     'game1': 'BGMI',
//     'game2': 'GTA-V'
// }
// for (const [key,val] of myObj) { // Not Possible
//     console.log(key, ':-',val);
// }


// const proLanguages = {
//     lang1: 'CPP',
//     lang2: 'Python',
//     lang3: 'HTML', 
// }
// for (const key in proLanguages) {
//     console.log(key,':- ',proLanguages[key]);
// }


// const arr2 = [2,4,6,8,10]
// arr2.forEach( function (val){
//     console.log(val);
// } )

// arr2.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// });

const newArr = [
    {
        langNm: "javascript",
        langExt:'.js'
    },
    {
        langNm: "java",
        langExt:'.java'
    },
    {
        langNm: "python",
        langExt:'.py'
    },
]

newArr.forEach( (item) => {
    console.log(item.langNm);
} )