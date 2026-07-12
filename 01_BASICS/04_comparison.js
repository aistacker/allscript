console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);



console.log("2">1);   //automatically convert  in number 
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);      //avoid thhis type of conversiion 
  
//the reason is that an equality check == and comarisons >  <  >=  <= work differently.

//Comaprison convert null to a numbner , treating it as 0 .
//that's why (3) null>= 0 is true and (1) null>0 is false 

console.log(undefined==0);     //comaprison and equality heck is different

// === strict check

console.log("2"===2); // check data type 




