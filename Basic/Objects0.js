// ********************************** OBJECT LITERALS **********************************

const Sym = Symbol("key1")
const JsUser = {
    name: "shraavniii",
    "full Name": "shravani sanjay salunke",
    age: 18,
    email: "shraavniii@gmail.com",
    loggenIn: false,
    [Sym]: "key1",
    lastLogin: ["mon", "sun"],
}

console.log(JsUser);
console.log(JsUser[Sym]); // dot not used
console.log(JsUser["full Name"]); // proper way to give output
console.log(JsUser["lastLogin"]);

// JsUser.email = "sharvani@gamil.com";  
// Object.freeze(JsUser);      // freezes the object 
// JsUser.age = 28;           //this change wont be applicable
// console.log(JsUser.age)    // still results 18 only


JsUser.greeting = function() {
    console.log("hello JS user !!!");
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser);

JsUser.greetingTwo = function() {
    console.log(`hello JS user ${this["full Name"]} !!!`);
}


console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());