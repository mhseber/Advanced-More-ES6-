// Array map to do one-line loop magic

const numbers = [4, 8, 2, 5, 8, 10];


// const doubled = []
// for (const num of numbers){
//     const result = num * 6;
//     doubled.push(result);
// }

// const doubledIt = x => x *2;
// const doubled = numbers.map(doubledIt)

const doubled = numbers.map(x => x * 7)


const friends = ['Hasan', 'Tushar', 'Ratul', 'Fahim', 'Towhid'];

const nameLengths = friends.map(name => name.length)
const firstLetter = friends.map(name => name[0]) 
console.log(firstLetter)