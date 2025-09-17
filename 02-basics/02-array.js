const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]);   //flash

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);   //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(another_array); //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);    //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
/* array.flat(Infinity)
Returns a new array, doesn’t modify the original.

Works in modern browsers (ES2019+).

Use Infinity to completely flatten any depth.
*/

// console.log(Array.isArray("Hitesh"));   //false
// console.log(Array.from("Hitesh"));  //[ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})); // [] => interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]
