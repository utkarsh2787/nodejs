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
// undefined is type(all stored in stack)
y = 11
y = 12
x = 13


// console.table([abc,x,y])
// console.log(typeof x)
// console.log(typeof(null))

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


// added n to end to covert to bigint
let bignumber = 99999999999999999999999999999999999n
console.log(typeof(bignumber))
console.log(bignumber)


//objects data type (arrays, objecys, functions (Non Primitive data types), stored in heap) like below q is stiored in stack and it has refernce ot object it has in heap
let bb = [1,2,4]
bb.push("war")
console.log(bb, bb[0])

console.log(typeof(bb))

let q = {
    name: "name",
    age: 12
}
console.log(typeof(q))
console.log(q)


// fucntion type
let finc = function(){
    console.log("fucntion called")
}
// or

function op(){
    console.log("fucntion2 called")
}
op()
finc()
console.log(typeof(op), typeof(finc))