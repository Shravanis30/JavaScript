//higher order functions
const coding = ["java", "cpp", "swift", "php", "c", "js", "ruby"];

coding.forEach( function(codeName) {
    console.log(codeName)
})

coding.forEach( (item) => {
    console.log(item)
})

function printMe(item) {
    console.log(item)
}
coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item,index, arr)
})

const MyCoding = [
    {
        LanguageName : "javascript",
        FileName : "js",
    },
    {
        LanguageName : "java",
        FileName : "java",
    },
    {
        LanguageName : "python",
        FileName : "py",
    }
]

MyCoding.forEach((val) => {
    console.log(val.LanguageName);
    console.log(val.FileName);
    console.log(val);
})