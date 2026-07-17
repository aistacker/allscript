//objects
//singleton


//object litrals

const mySym =Symbol("key")



const jsUser ={
    name:"vishal",
    "full name":"vishal kumar",
    [mySym]:"myKey1",
    age: 30,
    location:"patna",
    email:"xyz@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

//console.log(jsUser.email);
//console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);




//Object.freeze(jsUser)
jsUser.email="fiefidb@gmail.com"
//console.log(jsUser.email);
//console.log(jsUser);

jsUser.greeting=function(){

    console.log("Hello JS user");
    
}
jsUser.greeting2=function(){

    console.log(`Hello JS user${this.name}`);
    
}
console.log(jsUser.greeting()); ///undefined
console.log(jsUser.greeting2());









