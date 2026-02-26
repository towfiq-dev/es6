function sumNum(num1, num2) {
  const result = num1 + num2
  return result
}

const result1 = sumNum(10, 20)
console.log(result1);

const sumNum1 = (num1, num2) => {
  return num1 + num2
}

console.log(sumNum1(30, 20));

const arrowFunction = (a,b,c) =>  a+b+c

const results = arrowFunction(3,2,3)
console.log(results);


const arrow = (x,y) => {
  const z = x+y
  return z+10
}
console.log(arrow(10,10));

const func = (m,n) => m+n
console.log(func(4,6));

const random = () => Math.random()*5
console.log(random());

