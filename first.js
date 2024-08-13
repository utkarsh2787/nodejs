// console.log("jhsjdxjkas")
// const abc = 10
// let x = 10
// var p = 11
// // use const and let, var has some prblm in js , const cant be changed let can be changed

// //alert(1) error: we are using nodejs, aleert doesnt exist in nodejs (diff syntax)
// //data types
// // number range(2^53)
// // string
// // bool
// // bigint
// // symbol ->unique
// // null is value
// // undefined is type(all stored in stack)
// y = 11
// y = 12
// x = 13


// // console.table([abc,x,y])
// let xyz = new Array(1,2,"xyz")
// console.log(typeof(xyz))
// // console.log(typeof x)
// // console.log(typeof(null))

// // type casting
// let str = String(x)
// console.log(typeof str)
// console.log(Number(true))
// console.log(Boolean(""))

// let str1 = "hello "
// let str2 = 'world'
// console.log(str1 + str2)

// console.log(x++)
// console.log(++x)

// // NaN is Not a Number and prevent comparision with null andn undefined
// console.log(isNaN("jfdki"))


// // == (value comparision, === value with type comsparision)


// // added n to end to covert to bigint
// let bignumber = 99999999999999999999999999999999999n
// console.log(typeof(bignumber))
// console.log(bignumber)


// //objects data type (arrays, objecys, functions (Non Primitive data types), stored in heap) like below q is stiored in stack and it has refernce ot object it has in heap
// let bb = [1,2,4]
// bb.push("war")
// console.log(bb, bb[0])

// console.log(typeof(bb))

// let q = {
//     name: "name",
//     age: 12
// }
// console.log(typeof(q))
// console.log(q)


// // fucntion type
// let finc = function(){
//     console.log("fucntion called")
// }
// // or

// function op(){
//     console.log("fucntion2 called")
// }
// op()
// finc()
// console.log(typeof(op), typeof(finc))


// string formatting 
// let str1= 'home'
// let x = 10
// let pp = `i am the best in the world ${str1} ${x}`
// console.log(typeof(pp))
// console.log(`i am the best in the world ${str1} ${x}`) // this is better
// console.log('i am the best in the world '+ str1 +x)
// console.log(pp[2])
// console.log(pp.length)
// console.log(pp.indexOf('i'), pp.indexOf('a'))
// console.log(pp.split(' '))
// console.log(pp.substring(2,6))
// x = 100000000
// let y = x.toLocaleString()
// let y2 = x.toLocaleString('en-IN')
// console.log(y, typeof(y))

// // Math
// console.log(Math.E)
// console.log(Math.tan(10))
// console.log(Math.sqrt(5))
// console.log(Math.round(10.5))
// console.log(Math.min(10,20,30))
// console.log(Math.ran)

// date and time
// let da = new Date()
// console.log(da.toString())
// console.log(da.toDateString())
// let de = new Date(2023, 0, 20) // jan 20 2023(12 AM)
// console.log(de.toString())
// console.log(de.toDateString())
// console.log(da.getDate())
// console.log(typeof(da.toLocaleString()))
// console.log(da.toLocaleString("default", {
//     minute: 'numeric'
// }))

// let ts = Date.now() // current time stamp in ms
// console.log(ts)

// arr

// let ar = [1,2,34,5,6]
// ar.push(10)
// console.log(ar.pop())
// ar.unshift(11) //push front
// console.log(ar.shift()) // pop front
// console.log(typeof(ar.join()), ar.join())

// let ap = ar.slice(2,5)
// console.log(ap)

// ar.splice(2,5)
// console.log(ar)

// let brr = [10,10]
// let c = ar.concat(brr)
// console.log(c)

// let d = [...brr, ...ar]  // concat multiple arrays at once
// console.log(d)

// console.log(Array.from("12,3,4,5,55"))


// objects

// let fu = function(){
//     console.log("i dont know")
// }
// let sym = Symbol("key1") // using symbol as key
// let sym2 = Symbol("key2")
// let obj = {
//     name:"name",
//     age: 10,
//     10: "pop",
//     "pranols": 10,
//     sym: 10,
//     [sym2]: "symvol",
//     funct : function(){
//         console.log(`my name is ${this.name}`)
//     },
//     rr: {
//         o:1
//     },
//     ff: fu
// }
// // console.log(obj[10], obj['name'], obj.name, obj['pranols'], obj.pranols)
// // console.log(typeof obj.sym) // its using sym as string not of symbol
// // console.log(obj[sym2]) // not obj.sym2
// // console.log(obj)
// // obj.funct()
// // console.log(obj.funct)
// // // Object.freeze(obj) // to not let anyone change object values like obj.age=10

// // let obj2 = {hop:10}
// // let obj3 = Object.assign(obj, obj2) // concating objects
// // let obj4 ={...obj, ...obj2}
// // console.log(obj3, obj4)

// // console.log(Object.keys(obj))
// // console.log(obj.hasOwnProperty('10'))

// // destructuring rr = obj.rr
// let {rr} = obj
// // opo = obj.rr
// let {rr: opo}= obj
// console.log(rr, opo)

//fucntions and if
// function abc(a,b){
//     if(!a || !b){
//         return 0
//     }
// console.log(a+b)
// return a+b
// }
// let x = abc(19,2)
// let y = abc()
// console.log(x, y)

// // rest operator ... same as spread ...
// function xxx(...a){
//     console.log(a)

// }

// xxx(1,2,3,3,4,5,6,6,7)

//for
// for(let i = 0; i<10 ; i++){ //i is local scope
//     console.log(i)
// }

//hoisting and diff fucntiom

// opp() // no error it can be there before decalaration
// // op() // gives error  it cant be there befor decalaration
// let op = function(){
//     console.log("function called")
// }
// function opp(){
//     console.log("fucntion2 valled")
// }
// op()
// opp()


// this (to mention current context) , in brwoser global context is windows, else its none works only in objects

// let obj = {
//     x:10,
//     abc : function(){
//         console.log(this.x) // not console.log(x) gives error
//         console.log(this)
//     }

// }
// function hh(){
//     console.log(this)
// }
// obj.x = 20
// console.log(this)
// obj.abc()
// hh()

//arrow functions

// let abc = function(){
//     let u = 10
//     console.log(this) 
//     console.log(this.u) //gives undefined not works inside function works in object
// }
// abc()

// let a = ()=>{
//     let u = 10
//     console.log(this)  // gives empty
//     console.log(this.u) //gives undefined not works inside function works in object
// }
// abc()
// a()
// let ab = (n1, n2) => (n1+n2 )//return n1+n2
// console.log(ab(10,2))
// let x = () => ({a:10})
// console.log(x())

// IIFE(immediate ivoked function)
// (function(){
//     console.log("func1")
// })();  // semicolon imporatn to stop executioo and scope
// (()=>{
//     console.log("fucnt2")
// })();
// ((x)=>{
//     console.log(`${x}`)
// })("fucntion3");

//JS execution
/*
JS is single threaded
initally makes (GEC)global exceution context (this) in nodejs its empty and in browser is has window object, it also have FEC (Function execution context)
second: Memory creation phase( make all variables and assigns value undefined in them and also make function with defination)
third: execution phase (assigns vlaue to variables qand when function is called a new execution environment is made)
3a: again inside that function env memeory and execution phase for that particular function and is executed in execution phase and returns result to global execution context
3b: after execution this funciton env deltees
now if (a(b(c()))) a has b func , b has c
call stakc [golbal, a,b,c](LIFO)

*/


// IF ELSE false vaklue sare 0, "", NAn, null, undefined

// if(1==1 && 2==1){
//     console.log("exe")
// }
// else if(2==1 || 1==1){
//     console.log(10)
// }
// else{
//     console.log(11)
// }

//switch

// let abc = 10
// switch(abc){
//     case 11:
//         console.log(10)
//         break
//     case 10:
//         console.log(11)
//         break
//     default:
//         console.log(10)
//         break
// }

// ?? to put null value or the value that comes form a complex fucnrion(error)

// let val1 = null ?? 2
// let val2 = null ?? undefined
// let val3 = undefined ?? 2 ?? 3
// console.log(val1, val2, val3)


// loops
// for(let a =0; a<10; a++){
//     if(a==2){
//         continue
//     }
//     console.log(a)
//     if(a==3){
//         break
//     }
    
// }
//  let i = 0
//  while(i<5){
//     console.log(i)
//     i++;
//  }

//  let arr = [1,2,4,5,6]
//  for(a of arr){
//     console.log(a)
//  }

// maps

// let m = new Map()
// m.set(1,2)
// m.set(5,2)
// m.set(2,32)
// m.set(1,2)
// console.log(m)

// for(a of m){
//     // a[0] has key and a[1] haas value
//     console.log(a[0], a[1])
// }

// console.log(m.get(1))

// // to iterate on object key

// let obj = {
//     val1:1,
//     val2:2
// }

// // using in instead of 'of' in iterated over keys (used for objects only)
// for(key in obj){
//     console.log(key, obj[key])
// }


// foreach
// let arr = [1,2,3,5,6,5]

// arr.forEach((a)=>{
//     console.log(a+1)
// })
// //or

// arr.forEach(function(a){
//     console.log(a+1)
// })
// //or
// // i is index 
// function op(a, i){
//     console.log(a+1, i)

// }

// arr.forEach(op)


// //map
// let arr = [1,2,45,6,7,7,8]
// let prr = arr.map((a)=>(a+1))
// console.log(prr)

// //reduce  (preforms sum of brr initla value of variable is 0(a))

// let brr = [1,2,3,45,6,7,8,90]

// let x = brr.reduce((a,b)=>a+b, 0) // a=0, b= current value
// console.log(x)

// DOM

console.log(document.querySelector("h1"))
