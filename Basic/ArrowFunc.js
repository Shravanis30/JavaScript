// "this" keyword refers current contex

const user = {
    username: "shraavniii",
    id: 101,
    course: "cs",

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "ttejuuu";
// user.welcomeMessage()
// console.log(this);

//window is the globol object

function demo() {
    usernames = "ttejuda"
    console.log(this.username);    // this cannot allocate this in the function like this
}
demo()   // results undefined

const demo1 = function() {
    usernames = "ttejubokii"
    console.log(this.username);
}
demo1()   // results undefined



//arrow fucntion
const demo2 = () => {
    usernames = "ttejubokii"
    console.log(this.username);
}
demo2()   // results undefined



//basic arrow function
const addTwoNumbers = (num1, num2) => {
    return num1+num2;
}
console.log(addTwoNumbers(5,8))

// when currly braces are used return keyword is neccessary
// when brackets are used return keyword is not needed(obj are rapped in brackets & then currly braces({}))

//implicit arrow function
const addThreeNumbers = (num1, num2, num3) =>  (num1+num2+num3);  // return keyword not used (one line fucntion)
console.log(addThreeNumbers(5,8,4))



const addname = (name) => ({name : "ttejuuu"})
console.log(addname(name))