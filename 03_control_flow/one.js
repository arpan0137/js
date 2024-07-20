// Nullish Coalescing Operator (??) : null,undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 20 //this will prevent variable to assign null or undefined
// val1 = undefined ?? 25
val1 = null ?? undefined ?? 25

console.log(val1);