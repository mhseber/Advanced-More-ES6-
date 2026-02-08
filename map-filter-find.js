// map-filter-find

const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 22, grade: 90 },
  { name: 'Charlie', age: 19, grade: 78 },
  { name: 'David', age: 21, grade: 92 },
];

const names = students.map(student => student.name);
console.log('Names:', names);

const GoodStudents = students.filter(student => student.grade >= 80);
const GoodStudent = students.find(student => student.grade >= 80);
console.log('Good Students:', GoodStudents);
console.log('Good Student:', GoodStudent);