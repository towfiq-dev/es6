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
// const keys = Object.keys(mySelfs)
// console.log(keys);
// const values = Object.values(mySelfs)
// console.log(values);
// const entries = Object.entries(mySelfs)
// console.log(entries);
Object.freeze(mySelfs)
delete mySelfs.ages
mySelfs.style = 'red'
mySelfs.names = 'Towfiqul shuvo'
console.log(mySelfs);