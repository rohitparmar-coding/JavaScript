
// Array
const arr = [0, 1, 2, 3, 4, 5]; 
console.log(arr[0]);

// shallow and deep copy in javascript  ={

    // const originalArray = [1, { a: 2 }];
    // const shallowCopyArray = [...originalArray];
    // shallowCopyArray[1].a = 3; // Modifies originalArray as well 

    // const originalObject = { x: 1, y: { z: 2 } };
    // const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
    // deepCopyObject.y.z = 3; // Original object remains unchanged

    //   }=


const myHeros = ["shaktiman", "Duba Duba"]
const myarr = new Array(1, 2, 3, 4, 5)


// array methods

arr.push(6);  // add value at the end
console.log(arr);

arr.pop(); // remove last of value of arr
console.log(arr);

arr.unshift(10);  // add value starting from array
console.log(arr);

arr.shift(); // remove value starting from array
console.log(arr);

// // o/p 
// 0
// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]
// [ 0, 1, 2, 3, 4, 5 ]
// [
//   10, 0, 1, 2,
//    3, 4, 5
// ]
// [ 0, 1, 2, 3, 4, 5 ]



console.log(arr.includes(5))  // true
console.log(arr.indexOf(4))  // 4

// Join 
// join convert the array into string datatype ( typeof newArr => String)
const newArr = arr.join()
console.log(arr)           //[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr)        // 0,1,2,3,4,5
console.log(typeof newArr)   // string

// imp
// slice, and splice  

const Arr = [0, 1, 2, 3, 4, 5];
console.log("main array A: ", Arr);

const myn1 = Arr.slice(1, 3);
console.log(myn1);
console.log("main array B: ", Arr);

const myn2 = Arr.splice(1, 3);
console.log(myn2);
console.log("main array C: ", Arr);

// O/P
// main array A:  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// main array B:  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]
// main array C:  [ 0, 4, 5 ]





