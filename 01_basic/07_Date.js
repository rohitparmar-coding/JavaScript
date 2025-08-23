
// Dates

let myDate = new Date()
console.log(myDate)               // 2025-08-23T08:18:12.841Z
console.log(myDate.toString())     //  Sat Aug 23 2025 08:23:44 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())  // Sat Aug 23 2025
console.log(myDate.toLocaleString())  // 8/23/2025, 8:23:44 AM
console.log(typeof myDate);            // object

// let myCreatedDate = new  Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString())   // Mon Jan 23 2023


// let myCreatedDate = new  Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString())  

let myCreatedDate = new  Date("2023-01-15")
console.log(myCreatedDate.toLocaleString())   // 1/15/2023, 12:00:00 AM


let myTimeStamp = Date.now();
console.log(myTimeStamp);               ///1755938775299
console.log(myCreatedDate.getTime());   // 1673740800000

// convert into second
// console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));   //1755938775

let newDate = new Date()
console.log(newDate);                 // 2025-08-23T08:46:15.300Z
console.log(newDate.getDay());            // 6
console.log(newDate.getMonth() + 1);      // 8
console.log(newDate.getFullYear());  // 2025

// `${newDate.getDay()} / ${newDate.getMonth()}

// newDate.toLocaleString('default', { weekday: "long" })