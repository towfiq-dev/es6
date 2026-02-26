const jokes = {
  id: 101,
  title: 'jokes 1',
  release: 2002
}

const {id, title, release} = jokes
console.log(id);
console.log(title);


const mySelf = {
  name: 'Towfiqul Islam',
  age: 22,
  fName: 'Md Shah Amran',
  mName: 'Nasima Begum',
  address: 'Dhaka'
}

const {name, age, fName, mName, address} = mySelf
console.log(name);
console.log(age);

const numbers = [1,2,3,4,5,]
const [num1, num2, num3, num4, num5] = numbers
console.log(num5);

const mySelfs = {
  names: 'Towfiqul Islam',
  ages: 22,
  addresss: 'Dhaka',
  moreInfo:{
  fName: 'Md Shah Amran',
  mName: 'Nasima Begum',
  profession: 'jobHolder'
  }
}
const {names, ages, addresss, moreInfo} = mySelfs
console.log(names);
console.log(moreInfo.profession);


