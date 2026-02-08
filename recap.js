// var let const 
const tax = 5000;
let eta = 5;
eta = 2;

const student = {name: 'seber', marks: 50}
const friends = ['ratul', 'towhid', 'fahim' ]

// default parameter
function add(num1, num2 = 0){

}

// template string 
const dynamicText = `My Tax: ${tax} and marks ${student.marks * 1.2} has
friends: ${friends[1]}`

const innerHTML = `
<div>
    <h1>Hello: ${friends.length}</h1>
    <p></p>
</div>
`

// arrow function 
const add2= (num1, num2 = 0) => num1 + num2;
const tenTimes = x => x * 10;

// spread 
const newFriends = [...friends, 'hasan', 'woeo']

// destructuring
const { marks: totalMarks, age = 0} = student
console.log(totalMarks, age)