function addToCard(...number) {
  return number
}

console.log(addToCard(100,200,300,400));
const addToCards = (...numbers) =>{
  return numbers
}
console.log(addToCards(1,2,3,4,5));

const sums = (...numss) => numss
console.log(sums(9,8,7,6));

function adds(num1, num2, ...num3 ){
 return num3
}

console.log(adds(1,2,3,4,5,6));


