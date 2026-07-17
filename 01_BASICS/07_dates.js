//Dates

let myDate=new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());


//let myCreatedDate=new Date(2026,1,29)
//console.log(myCreatedDate.toDateString());

//let myCreatedDate=new Date(2026,1,29,4,6,7)

//let myCreatedDate=new Date("2026-05-12")

let myCreatedDate=new Date("01-06-2026")
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp =Date.now()

//console.log(myTimeStamp);
//console.log((myCreatedDate.getTime()));
//console.log(Math.floor(Date.now()/1000));




let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());



console.log();
newDate.toLocaleString('default',{
    weekday: "long"
})






