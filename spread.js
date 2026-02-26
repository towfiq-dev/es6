let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,0]

console.log(arr1);
console.log(arr2);
let arr3 = arr1
console.log(arr3);
let arr4 = [...arr1, ...arr2, ...arr3]
console.log(arr4);

let a = [10,20,30,40]
function sum(q,w,e,r) {
  return q+w+e+r
}
console.log(sum(...a));

let l = [6,3,4,5,6]
function foll(a,b,c,d,e) {
  return (a+b+c) - (d+e)
}
console.log(foll(...l));

let mins = [2,4,2,5,2,62,1]
console.log(Math.min(...mins)); 
console.log(Math.max(...mins));


