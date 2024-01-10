//LECTURE 1 APNA CLG
// // console.log("shraavniii");
// name = "shraavniii salunke";
// console.log(name);


// const student = {
//     fullName : "shravani sanjay salunke",
//     age : 18,
//     cgpa : 9.8,
//     isPass : true
// };
// student.age = student.age+1;
// console.log(student.age);


//pratice no 1. product of amazon
// const product = {
//     title : "parker jotter standard ball pen black",
//     rating : "4.5",
//     isDeal : false,
//     price : 270,
//     offer : 5
// }
// console.log(product);


//pratice no 2. instagram profile

// const insta_profile = {
//     username : "our_soul.19",
//     post : 5,
//     follower : 1,
//     following : 8,
//     bio : "Chiimniii 🐦 & bokya 😺",
//     isFollow : true
// }
// console.log(typeof insta_profile.username);


//LECTURE 2
//i am done with operators so no need to do again
//conditional statments are too done only one thing is new i.e dark mode and light mode

// let mode = "dark";
// let color;
// if(mode = "dark") {
//     color = "black";
// }
// if(mode = "light") {
//     color = "white";
// }
// console.log(mode);

// //alerts
// alert("stop");
// //prompt
// let name = prompt("hello!!!");
// console.log(name);

// practice no 1:
// let num = prompt("enter the number");
// if(num % 5 === 0) {
//     console.log(num, ":- yes, its the multiple of 5");
// } else {
//     console.log(num, ":- no, its not the multiple of 5");
// }

// practice no 2:
// let grade = prompt("enter your marks ");
// if (grade >= 80 && grade <= 100) {
//     grade = "A";
// } else if (grade >= 79 && grade <= 89) {
//     grade = "B";
// } else if (grade >= 60 && grade <= 69) {
//     grade = "C";
// } else if (grade >= 50 && grade <= 59) {
//     grade = "d";
// } else if (grade >= 0 && grade <= 49) {
//     grade = "F";
// } 

// console.log("according your marks your grade is = ", grade)


// LECTURE 3
//for in loop
// let student = {
//     fullName : "shravani sanjay salunke",
//     age : 18,
//     cgpa : 9.8,
//     isPass : true
// };
// for(let key in student) {
//     console.log("key = ", key, "value = ", student[key]);
// }

// practice no 1 (game)
// let gameNum = 58;
// let userNum = prompt("guess the game number : ");
// while(userNum != gameNum) {
//     userNum = prompt("you entered a wrong number guess the game number again : ");
// }
// console.log("congratulation you entered the right number");

//templete literal
// let obj = {
//     item: "pencil",
//     price : 10
// };
// let output = `the item is ${obj.item} and the price is ${obj.price}`;
// console.log(output);
// console.log("the item is", obj.item, " and the price is", obj.price);

// string methods   
// strings are immutable (no change) to make even a smaller change we need to create new variable 
// let str = "   shraavniii    salunke    learning js";
// console.log(str);
// str = str.toUpperCase();
// console.log(str);
// str = str.toLowerCase();
// console.log(str);
// str = str.trim();
// console.log(str);

// practice 1
// fullName = prompt("enter the full name without space:")
// username = "@" + fullName + fullName.length;
// console.log("therefore your username = ", username); 


// LECTURE 4 
// arrays behave like object , array is mutable
// let marks = [34, 56, 98, 86, 74];
// console.log(marks);
// console.log(marks.length);
// for(let i = 0; i <= marks.length; i++) {
//     console.log(i)
// }
// for(let val of marks) {                
//     console.log(val);
// }

//array methods
//push is used to add at end
// let names = ["ttejuuu", "shraavniii", "deep", "aai"];
// console.log(names);
// names.push("papa", "shashak");
// console.log(names);
// names.pop();
// deletednames = names.pop();
// console.log(names);
// console.log("therefore the deleted item = ", deletednames)
// unshift adds at the start
// names.unshift("bokiii");
// console.log(names);
//shift delete from the start
// names.shift();
// console.log(names);
//slice
//console.log(names.slice(1,3));     // it doesnt change the original contain
//splice change the array [add, remove replace]
// console.log(names.splice(1, 2, "iku", "piku", "chiku"))

//practice
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//remove 1st company from array
//console.log(companies.shift());
// remove uber and add ola 
// console.log(companies.splice(2,1, "ola"));
//add amazon at end
// companies.push("amazon");
// console.log(companies);


//LECTURE 5
//add two numbers
// function sum(x, y) {
//     return x+y;
// }
// console.log(sum(2,4));

//arrow functions
// const arrowsum = (a,b) => {
//     return (a+b);
// }
// const arrowmul = (a,b) => {
//     return (a*b);
// }

//practice 1 count vowels
// const countVowels = (str) => {
//     let count = 0;
//     for(let char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     console.log(count);
// }

// foreach loop , its a higher order funtion ;     higher order functions contain the other functions ;   callback of other functions
// let names = ["ttejuuu", "shraavniii", "deep", "aai"];
// names.forEach((val, i, names) => {
//     console.log(val.toUpperCase(), i, names);
// })
 
//pratice no 1;
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// num.forEach((val) => {
//     console.log(`the square of ${val} = ${val*val}`);
// })

//map methods similar to forEach but maps create a new value
// let num = [12, 53, 23, 45];
// let newnum = num.map((val) => {
//    return val*val;
// })
// console.log(newnum);

//filter method
// let num = [12, 34, 87, 56, 53, 23, 45];
// let newnum = num.filter((val) => {
//     return val%2 == 0;
// })
// console.log(newnum);

//reduced method 
// let num = [12, 53, 23, 45];
// let newnum = num.reduce((result, currentNum) => {
//     return result + currentNum;
// })
// console.log(newnum);

//pratice question
// let num =prompt("enter the value of num ");
// let arr=[];
// for(let i = 1; i<= num; i++) {
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((result, currentNum) => {
//     return result + currentNum;
// })
// console.log(sum);

// let product = arr.reduce((result, currentNum) => {
//     return result * currentNum;
// })
// console.log(product);


// LECTURE 6
// searching with id => document.getElementById    used in css using # 
// let heading = document.getElementById("heading");
// console.dir(heading);

// searching with class => document.getElementByClassName    used in css using .
// let paragraph = document.getElementsByClassName("para");
// console.dir(paragraph);
// console.log(paragraph);

// selecting using tags => 
// let paras = document.getElementsByTagName("p");
// console.dir(paras);

// let element = document.querySelector("p");
// console.log(element);
// console.dir(element);
// let allelement = document.querySelectorAll("p");
// console.dir(allelement);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from shraavniii";

// let divs = document.querySelectorAll(".box");
// let i=1;
// for(let div of divs) {
//     div.innerText = `the new unique value = ${i}`;
//     i++;
// }


// LECTURE 7
//pratice 1
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor  = "red";
// document.querySelector("body").prepend(newBtn);

// // practice 2
// let para = document.querySelector("p");
// para.classList.add("newClass");