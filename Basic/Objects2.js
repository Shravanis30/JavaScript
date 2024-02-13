// ****************** DESRUCTURING *********************

const courses = {
    topic : "js in hindi",
    coursesInstructor: "hitesh",
    price: 999,
}


console.log(courses.coursesInstructor);
console.log(courses.topic);
console.log(courses.price);
// repectative use of the word course 

const {topic : t /*renaming*/, coursesInstructor: CI, price: p} = courses
console.log(t);
console.log(CI);
console.log(p)

// both above gives same answer but the 2nd method make it convinitent to use (it reduced the writing of word course)



// json
// {
//     topic : "js in hindi",
//     coursesInstructor: "hitesh",
//     price: 999, 
// }


// [
//     {},
//     {},
//     {}
// ]