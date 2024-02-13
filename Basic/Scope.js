// gobal scope is different in brower and differnet in node (in vscode)

var num1 = 30;
let num2 = 40;

var num1 = 300; // can declare one named variable everwhere 

if(true) {
    var num1 = 234;
    console.log(num1);
}
console.log(num1); 
console.log(num2);




// Nested scope 

//nested scope works like a icecream (child can take the icecream from parent but from parent cant take from child)

function parent() {
    const name = "aai"
    function child() {
        iceCream = true;
        console.log(name);
    }
    // console.log(iceCream);

    // child();
}
parent();


if(true) {
    const username = "shraavniii"
    if(username === "shraavniii"){
        const laptop =  " hp"
        console.log(username + laptop);
    }
    // console.log(laptop);
}
// one(username);



// *********** hoisting **************


console.log(addOne(5));
function addOne(num) {
    return num+1;
}
console.log(addOne(5));



console.log(addTwo(5));    // Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num+2;
}

console.log(addTwo(5));
