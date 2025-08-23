
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", 'batman', "flash"];

// push
marvel_heros.push(dc_heros)
console.log(marvel_heros);      // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// 
// concat
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);     
// o/p=>         
//  //[
//   'thor',
//   'Ironman',
//   'spiderman',
//   [ 'superman', 'batman', 'flash' ],
//   'superman',
//   'batman',
//   'flash'
// ]



// spread
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// flat
//  {flat convert multiple array into single array}
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);            // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// isArray()  check 
console.log( Array.isArray("Rohit") ) // false

// form() { form covert into array}
console.log( Array.from("Rohit") )  // [ 'R', 'o', 'h', 'i', 't' ]

console.log( Array.from( {name: "Rohit"}) )  /// interesting   op = []


// .of()
// it convert multiple value into array
let score1 = 100
let score2 =200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]