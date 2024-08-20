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

// filter  rreturn elemets which satisfies condition

// let arr = [1,2,44,5,6]
// let a = arr.filter((num)=>num>3)
// console.log(a)
// //map
// let arr = [1,2,45,6,7,7,8]
// let prr = arr.map((a)=>(a+1))
// console.log(prr)

// //reduce  (preforms sum of brr initla value of variable is 0(a))

// let brr = [1,2,3,45,6,7,8,90]

// let x = brr.reduce((a,b)=>a+b, 0) // a=0, b= current value
// console.log(x)

// DOM
// classic for loop works in all for(let a = 0; ....)
//selects first h1
// console.log(document.querySelector("h1"))

// //selects all h1 in nodelist (it doesnot have map, no for loop , but has for each)
// console.log(document.querySelectorAll("h1"))

// // select by if and class
// document.getElementById("id")

// // return htmlcollection , nor array and nodelist, it doesnot have foreach too, convert into arrAY  using Array.from()
// document.getElementsByClassName("class name")

// // change text
// let abc = document.querySelector("h1")
// abc.style.backgroundColor = "green"
// abc.innerHTML = "<h1>......" // have inner tags too
// abc.textContent = "kdnks"   // conetxt inside text even the hidden one
// abc.innerText = "........." // only whats shown on page content


// //create new element in document


// // return htmlcollection of all child tags
// abc.children


// async js

// js by default is sync, single threaded
// js engine is made of cal stack, memory heap
// set timeout , set interval and fetcjh()
// timeout , execute xyz after n sec, registers it, added to queue and than at it time is added tback to call stack
// gfetch() same, just its queue is higher prioriity


// promises

// creating promise
// let p1 = new Promise(function(resolve, reject){
//     // resolve what to do if succeeful
//     // what to do if reject
//     // do async task
//     setTimeout(function(){
//         console.log(1000)
//         resolve() // resolve connects promise to .then
//         console.log("op")
//     }, 1000)

// })

// //consuming promise
// p1.then(function(){
//     console.log("consumed")
// })
 
// if error 404 etc etc , its in resolve itself, not in reject, reject only if its not able to request
// let p3 = new Promise(function(resolve, reject){
//     // resolve what to do if succeeful
//     // what to do if reject
//     // do async task
//     setTimeout(function(){
//         console.log(1000)
//         resolve({username: "user", age:10, height: 109}) // resolve connects promise to .then and pass para ot then
//     }, 1000)

// })
// p3.then(function(user){
//     console.log(user)
// })

// let p4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//         resolve({username: "user", age:10, height: 109}) 
//         }
//         else{
//             reject("error something happened")
//         }
//     }, 1000)

// })

// // checks username being transferred
// p4.then(function(user){
//     return user.username
// }).then(function(username){
//     console.log(username)
// }).catch(function(er){
//     console.log(er)

// })


// let p5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//         resolve({username: "user", age:10, height: 109}) 
//         }
//         else{
//             reject("error something happened")
//         }
//     }, 1000)

// })

// // without using .then using async fucntuion 
// async function af() {
//     try {
//         // waits for rewspos sefrom p5
//     let resp = await(p5)
//     console.log(resp)
//     } catch (error) {
//         console.log(error)
        
//     }

// }
// af()


// using fetch , it returns a promsie

// fetch("https://api.github.com/ushiteshchoudhary").then(function(response){
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();

// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log("error")
// })

// // using asyn

// async function af2() {
   
//     try {
//         let resp = await(fetch("https://api.github.com/users/hiteshchoudhary"))
//         let data = await(resp.json()) // wait for it convert to jsaon as well as it takes time
//         console.log(data)
//     } catch (error) {
//         console.log("error")
//     }
// }

// af2()

// fetch has priority queue so it will be fulfilled before otehr promises etc etc, so its executed befiore them if tuimeout is same
// fetch 2 things, one to network to fetch data (rejection or rsolve) and other to reserve data space for the data cimng from rejectiona and resolfvw

// constructor

// function abc(x){
//     this.x = x
//     return this // no need to implicitley call
// }

// let a = abc(1)
// let a2 = abc(2)
// // onsole.log(a)// print(this.x = 2) not greated seprate instance

// let a3 = new abc(2)
// let a4 = new abc(4)
// // a3 and a4 difff insance a3 = 3, a4 = 4 , when new is called , empty object is called , paasses values, addds this, 

// console.log(a3.constructor)  // refernce to itself
// console.log(a.constructor)   // refernce to object 


// protoype is main thing for new, this etc etc
// in js everything is object (functions, arrays all)

// function abc(x){
//     return a*4
// }

// abc.power = 2
// console.log(abc.power)
// console.log(abc.prototype)  // object

// function xyz(a,b){
//     this.a = a
//     this.b = b
// }
// xyz.prototype.addd = function(){
//     this.a++
// }
// console.log(xyz.prototype)

// let h = new xyz(10,1) // new is keyworkd that tells that these new functions methods ahve been added
// let k = new xyz(18, 3) // new is keyworkd that tells that these new functions methods ahve been added
// console.log(typeof(xyz(10,2)), typeof(new xyz(1,1)))  // when new caleed it creates seprate object , in normal func it calls global ovbject (undefied in node and windows in browser)

// h.addd()
// console.log(h)
// // new acts like constructor function, prototype is linked to new

// let ar = [1,24,56]
// let ob = {
//     a:10
// }
// Object.prototype.pp = function(){
//     console.log(10)
// }
// console.log(Object.prototype)
// console.log(Object.prototype.prototype) // undefined

// ar.pp()


// //inherritance (__proto__ to get prototype)
// let a = {
//     x:10
// }
// let b = {
//     y:100
// }

// let c = {
//     __proto__: b // inhertics b
// }
// console.log(c.y)
// c.__proto__  = a
// console.log(c.x)
// console.log(c.prototype) // error it works on class not instance
// console.log(typeof(c))
// // modern suyntax

// Object.setPrototypeOf(c, b)
// console.log(c.x, c.y)
// console.log(String.prototype)


// for functio execution isnide fucntion 

// function abc(a){ // it is called 
   
//     this.a = a 
// }
// function xyz(a,b){
//     this.b = b
//     abc(a)// this.a to different execution context of function a
// }

// let t = new xyz(10,1)
// console.log(t)

// function abc(a){ // it is called 
   
//     this.a = a  
// }
// function xyz(a,b){
//     this.b = b
//     abc.call(this, a) // execution context given to abc to save this to (this context)
// }

// let t = new xyz(10,1)
// console.log(t)

// // class
// class abc{
//     constructor(a,b,c){ // constructor
//         this.a=a
//         this.b = b
//         this.c = c
//     }

//     op(){ // method
//         return this.a 
//     }
// }
// let chai = new abc(1,1,1)
// console.log(chai.op())


// function bc(){
//     console.log(1)
// }
// bc.op = function(){
//     console.log(94)
// }
// bc.op() 
// bc.prototype.op = function(){
//     console.log(94)
// }

// let r = new bc()
// r.op()

// // when using new and objects add tp prototype, else add FileSystemDirectoryHandle, .prototyp
// // inhertance in classes

// class xyz extends abc{
//     r(){
//         console.log(29)
//     }
// }

// let yy = new xyz(1,2,3)
// console.log(yy.op())

// class ii extends abc{
//     constructor(o,l){
//         super(o)
//         this.l = l
//     }
//     static gg(){
//         console.log(103)
//     }
// }
// let you = new ii(108,39)
// console.log(you.op())

// // console.log(you.gg()) // error as its static
// ii.gg() // works as static is accessibe for class


// console.log(Object.getOwnPropertyDescriptor(Math, "PI")) // configuration of PI , value, writtable etc etc

// a = {
//     i:10,
//     j:12
// }
// console.log(Object.getOwnPropertyDescriptor(a,'i')) // in this we have wirtable etc et c=truewe are owner  we can change it

// Object.defineProperty(a, 'i', {
// 'writable':false
// })
// a.i = 109
// console.log(a.i) // 10

// getter and setter

// class abc{
//     constructor(a,b,c){
//         this.a = a
//         this.b = b
//         this.c = c
//     }
//     get a(){
//         return this._a // _.. is private property
//     }
//     set a(p){
//         // called whan this.a = a is called in constructor
//         this._a = p+1 // set as different variable as const and set both will try to fix this.a causing error, now only this will set _a
//     }
// }
// let y =new abc(1,2,3)
// console.log(typeof(y), typeof(abc))
// console.log(y.a)
// console.log(y)

// older syntax and similary in objcts too

// function xyz(a,b){
//     this.a = a
//     this.b = b

//     Object.defineProperty(this, a, {
//         get:function(){return this.a},
//         set: function(value){
//             this.a = value
//         }
//     })
// }

// let y = new xyz(1,2)
// console.log(y)
// a = {
//     _l:10, // private
//     get l(){
//         return this._l+1
//     },
//     set l(v){
//         this._l = v
//     }
// }

// let m = Object.create(a)
// m.l = 19
// console.log(m.l)

// lexical scopping and closure
// function makeFunc() {
//         const name = "Mozilla";
//         function displayName() {
//             console.log(name);
//         }
//         return displayName;
//     }

// const myFunc = makeFunc(); // in this whole scope of parent fucntion is also passed on
// myFunc();

// function clickHandler(color){
//     // document.body.style.backgroundColor = `${color}`

//     return function(){
//         document.body.style.backgroundColor = `${color}`
//     }
// }
// // real world example of closure
// document.getElementById('orange').onclick = clickHandler("orange")
// document.getElementById('green').onclick = clickHandler("green")