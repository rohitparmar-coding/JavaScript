

// // ------------------- Number-------------------

// const score = 800

// const balance = new Number(3399)       // o/p

// console.log(balance);              // [Number: 3399]

// // toString use for converting the number to string
// console.log(balance.toString());        // 3399
// console.log(balance.toString().length)  // 4
// console.log(balance.toFixed(1));       // 3399.0


// const otherNumber = 12.89993
// console.log(otherNumber.toPrecision(3));  //12.9


// const  hundreds = 100000
// console.log(hundreds.toLocaleString())   //100,000
// console.log(hundreds.toLocaleString('en-IN'))   /// 1,00,000


// --------------------- Math ------------------

console.log(Math)
console.log(Math.abs(-4));       //4
console.log(Math.round(4.8));         //5
console.log(Math.round(4.2));      // 4
console.log(Math.floor(4.8));     // 4 
console.log(Math.ceil(4.8));      //5
console.log(Math.min(4,5,2,0,8));   //0
console.log(Math.max(4,5,2,0,8));   //8

// random value range (0 to 1)
console.log(Math.random());                    // 0.9155252117349575
console.log((Math.random() * 10) + 1);            // 5.447962511237387
console.log(Math.floor(Math.random()*10) + 1);    // 1

const min = 10
const max = 20
// important formula

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //18
