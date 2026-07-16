const name="vishal"
const repoCount =50

console.log(name+repoCount+"value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const  gameName =new String ("vishal-vk")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log( gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));


const newString =gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-6,4)

console.log(anotherString);


const newStringOne="  vishal   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://abc.com/xyz%vx"
console.log(url.replace('%','-'));
 
console.log(url.includes('abc'));


console.log(gameName.split('-'));




