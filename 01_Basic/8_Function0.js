function sayMyName() {
    console.log("T")
    console.log("E")
    console.log("J")
    console.log("A")
    console.log("S")

}
// sayMyName();




function addTwoNumbers(number1, number2) {  // parameters
  return number1+number2;
}

const result = addTwoNumbers(2, 3) // argumnets
console.log("result = ",result)   // result correct only when return is used in the function definition

function loginStatus(username) {
    if(!username) {       //username === undefined
        console.log("please enter the username!!");
        return;
    }
    return `${username}, just logged in!`;
}

console.log(loginStatus("shraavniii"))
console.log(loginStatus())  // undefined





function calculateShopingCart(...num1) {    // rest operator
    return num1;
}

console.log(calculateShopingCart(200, 300, 400))  // result the in the form of array





// function calculateShopingCart1(val1, val2,...num1) {    // rest operator
//     return num1;
// }
// console.log(calculateShopingCart1(200, 300, 400, 2000))  // result the in the form of array
// val1 & val2 take the values of 200 and 300 in them and ...num takes the value of 4000 n 200





const book = {
    name: "unfuck the life",
    price: 280,
}

function handleObject(anyObject) {
    console.log(`the name of the book is ${anyObject.name} and its price is ${anyObject.price}`)
}

handleObject(book)
handleObject({
    name: "dairy of CEO",
    price: 399,
})





const MyNewArray = [100, 200, 490, 500];

function returnthirdvalue(getarray) {
    return getarray[2];
}

console.log(returnthirdvalue(MyNewArray));
console.log(returnthirdvalue([200,400,600,877,977]));