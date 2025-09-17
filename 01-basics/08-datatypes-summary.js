// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof anotherId);  //symbol

console.log(id === anotherId);  //false

const bigNumber = 789456123789456123n

console.log(bigNumber);     //789456123789456123n
console.log(typeof bigNumber);  //bigint

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");   
}

// https://262.ecma-international.org/5.1/#sec-11.4.3