/// # premitive


//7 types :   Striinig , Number ,Boolean, Null ,Undefiined  ,Symbol ,BigInt Call by value 

const score =100 
const scoreVlaue=100.3


//const LoogedIn= False;
const outsideTemp =null

let userEmail;

const id=Symbol('123')
const anotherID= Symbol('123')

//console.log(id==anotherID);

const bigNumber=3464576854768675658n

//onsole.log(typeof(bigNumber));


// Reference type   non-premitive

// Array, objects ,Functions 



const heros=["a","rrt","dfrg","fdgg","fdg"]


let obj={
    name:"vishal",
    age: 27,
}





const myFunction = function(){

   // console.log("hello world");
    
}

 //console.log(typeof(myFunction));
 

 let myName ="Vishal"

 let anotherName=myName
anotherName ="rahul"

 console.log(anotherName);
console.log(myName);

let userOne={
    email: "xyz@gmail.com",
    upi:"user@ybl"

}
 

let userTwo=userOne

userTwo.email="fheiuh@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);







