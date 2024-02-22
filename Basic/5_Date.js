let mydate = new Date();

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString());
console.log(mydate.toISOString());     //GMT
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());  // date n time(12hrs format)
console.log(mydate.toUTCString());     // as per GMT
console.log(mydate.toTimeString());    // as per indian in 24hrs format
console.log(typeof mydate);


const newDate = new Date(2023, 0, 30, 6, 30, 59);
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(newDate.getTime());

console.log(Math.floor(Date.now()/1000))


let NewDate = new Date();
console.log(NewDate);
console.log(NewDate.getDay());
console.log(NewDate.getMonth());
console.log(NewDate.getFullYear());
console.log(NewDate.getHours());
console.log(NewDate.getMinutes());


console.log(newDate.toLocaleString('default', {
    weekday: "short",
    
}))