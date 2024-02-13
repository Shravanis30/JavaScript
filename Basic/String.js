const name = "shravani"
const PRN = 60;

console.log(`hello i am ${name} and my Prn is ${PRN}`)
const myname = new String('       shraavniii            ');
console.log(myname.trimEnd());
console.log(myname.trimStart());
console.log(myname.charAt(10));
console.log(myname.toLowerCase());
console.log(myname.toUpperCase());
console.log(myname.replace("s", "t"));
console.log(myname.big());
console.log(myname.slice(10, 15));  //15 will not be included
console.log(myname.split("r"));     // r gets drop
console.log(myname.substring(10, 15)); //15 will not be included
console.log(myname.toLocaleLowerCase());
console.log(myname.toLocaleUpperCase());
console.log(myname.padEnd());
console.log(myname.padStart());
console.log(myname[10]);           //1st letter is considered
console.log(myname.indexOf("i"));  //1st letter is considered
