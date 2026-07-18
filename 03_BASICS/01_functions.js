


function sayMyName(){

console.log("v");
console.log("i");
console.log("s");
console.log("h");
console.log("a");
console.log("l");
}

///sayMyName()


function addTwoNumbers(number1,number2){

   //console.log(number1+number2);
//let result =number1+number2
//return result
    return number1+number2
}

const result =addTwoNumbers(4,5)

//console.log("Result",result);

function loginUserMessage(username="SAM"){
    if(username===undefined){                     //(!username)
console.log("please enter a username");
return
    }

    return`${username} just logged in`
}


 console.log(loginUserMessage("VISHAL"));
 //console.log(loginUserMessage());  //undefined


 function calculateCartPrice(val1,val2,...num1){

    return num1


 }
 console.log(calculateCartPrice(200,344,56));



 const user={
    username:"vishal",
    prices:99999   //  price :99999 will work and s will undefined

 }

 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
username:"sam",
price:56768

})
 

const myNewArray =[23,455678,345,6876834,23554]

function returnSecondValue(getvalue){
    return getvalue[4]

}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([23,455678,345,6876834,23554]));
