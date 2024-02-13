// stack => Primitive datatypes (num, bool ... etc) => provides copy
// heap => Non-Primitive datatypes (object, class... etc) => provides same address location

//stack memory
// Last In, First Out (LIFO) 
// here the copy is provided of the names so output will be different

// let names = "shraavniii";
// let anothername = names;
// anothername = "ttejuuu";
// console.log(names);
// console.log(anothername);


// heap memory
//The heap is a region of memory used for dynamic memory allocation
// here the same address is provided so ouput will be same

let user1 = {
    email: "shraavniii19@gamil.com",
    phoneNo : 89089,
}

let user2 = user1;

user2.email = "ttejuuu30gmail.com";

console.log(user1.email);
console.log(user2.email);
