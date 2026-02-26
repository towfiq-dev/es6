function add2( num1, num2 = 0) {
  const total = num1 + num2
  console.log(total);
  
}
add2(10,20,10)

function fullName(first, last = ' ') {
  const name = first + ' ' + last
  console.log(name);
  
}

fullName('Towfiqul')