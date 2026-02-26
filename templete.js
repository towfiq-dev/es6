
const firstName = 'Towfiqul'
const midleName = 'Islam'

const aboutMe = `My name is ${firstName} ${midleName}`
//console.log(aboutMe);

function getCardHTML(name, description, price) {
  
  const div = `
  <div class='card'>
  <h2>${name}</h2>
  <p>Price: $ ${price}</p>
  <p>${description}</p>
  </div>
  `;
  console.log(div);
}

getCardHTML('iphone 12', 'This is the latest iphone model', 999);
function mySelf(name, age, classs, fName, mName,) {
  const div = `
  <div>
  <p>My name is ${name.toUpperCase()}</p>
  <p>I am ${age} years old</p>
  <p>My class is ${classs}</p>
  <p>My father name is ${fName}</p>
  <p>My Mother Name is ${mName}</p>
  </div>
  `
  console.log(div);
  
}
mySelf('Towfiqul Islam', 22, 'Honours', 'Nasima Begum', 'Md Shah Amran')
