const arr1 =[1,2,3,4,5]
console.log(...arr1);

const arr2 = arr1
console.log(arr2);
const arr3 = [...arr1, ...arr2]
console.log(...arr3);


const params = [45,12,3]

function sum(x,y,z) {
  return x+y+z
}
const result = sum(...params)
console.log(result);
const array1 = [1,2,3]
const array2 = [...array1]
array2.push(4)
console.log(array1);
console.log(array2);

const person ={name: 'alice', age: 30}
const person2 = {...person}
person.salary = 36000
console.log(person);
console.log(person2);
