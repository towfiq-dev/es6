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
Object.freeze(mySelfs)
delete mySelfs.moreInfo.fName
mySelfs.style = 'red'
mySelfs.names = 'Towfiqul Islam Shuvo'
console.log(mySelfs);
