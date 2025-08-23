
const name = "ROHIT"
const repoCount = 50

console.log(name + repoCount + "Parmar");

console.log(`Hello my name is ${name} and my repo count are ${repoCount}`);

const gameName = new String("ROll-No-0")

console.log(gameName[0]) // 0
console.log(gameName.__proto__);  // {}

console.log(gameName.length);  // 9
console.log(gameName.toUpperCase()); // ROLL-NO-0
console.log(gameName.charAt(2));  // 1
console.log(gameName.indexOf('t'))  // -1


const newString = gameName.substring(0, 2) // RO
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);   // oll


// 
// trim
const newStingOne = "  Parmar  ";
console.log(newStingOne);
// trim() function is use for removing extra space 
console.log(newStingOne.trim());  // 'parmar'


// Replace
const url = "https://google.com/hello20%Rohit";
console.log(url.replace("20%", '?'));   //       o/p=> https://google.com/hello?Rohit

// include
console.log(url.includes('parmar')) //o/p = false


// split
console.log(gameName.split('-'));  //[ 'ROll', 'No', '0' ]

