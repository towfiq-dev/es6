const mySelfs = {
  names: 'Towfiqul Islam',
  ages: 22,
  addresss: 'Dhaka',
  moreInfo:{
  fName: 'Md Shah Amran',
  mName: 'Nasima Begum',
  profession: 'jobHolder',
  family:{
    brother: '3',
    sister: '1',
    bio:{
      age:'23'
    }
  }
  },
  
}
console.log(mySelfs.names);
console.log(mySelfs.moreInfo.family.bio?.age);
