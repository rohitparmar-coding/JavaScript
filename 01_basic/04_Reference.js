
// Reference (Non primitive data type)

// Array
// const arr = ["shaktimal", "naagraj", "doga"]

// // Object
// let myObj = {
//     name: "parmar",
//     age:55,
// }

// // Function
// const myFunction = function(){
//     console.log("Hello World");
// }



// // typeof 
// console.log(typeof arr);  //obj
// console.log(typeof myObj);  //obj
// console.log(typeof myFunction); //obj


// Memory allocation in javaScript

// stack (privitive), 
let myYoutubename = "hello";

let anotherName = myYoutubename
anotherName = "keshe he ap"

console.log(myYoutubename)
console.log(anotherName)


// Heap (Non-Primitive data)
let user1 = {
    email: "example@g.com",
    upi:"111122"
}

let user2 = user1

user2.email = "hello@google.com"

console.log(user1.email)
console.log(user2.email)