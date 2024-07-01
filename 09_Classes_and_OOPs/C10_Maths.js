console.log(Math.PI);   // here PI value never changes but there is one soultion to change it


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter)


const Course = {
    username: "JavaScript",
    Fees: 10000,
    isAvailable: true,
}

console.log(Course);
console.log(Object.getOwnPropertyDescriptor(Course)); // undefined
console.log(Object.getOwnPropertyDescriptor(Course, "username"));
Object.defineProperty(Course, 'name', {
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(Course, "username")); 
