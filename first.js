console.log("jhsjdxjkas")
const abc = 10
let x = 10
var p = 11
// use const and let, var has some prblm in js , const cant be changed let can be changed

//alert(1) error: we are using nodejs, aleert doesnt exist in nodejs (diff syntax)
//data types
// number range(2^53)
// string
// bool
// bigint
// symbol ->unique
// null is value
// undefined is type
y = 11
y = 12
x = 13


console.table([abc,x,y])
console.log(typeof x)
console.log(typeof(null))

// type casting
let str = String(x)
console.log(typeof str)
console.log(Number(true))
console.log(Boolean(""))

let str1 = "hello "
let str2 = 'world'
console.log(str1 + str2)

console.log(x++)
console.log(++x)

// NaN is Not a Number and prevent comparision with null andn undefined
console.log(isNaN("jfdki"))

// == (value comparision, === value with type comsparision)

