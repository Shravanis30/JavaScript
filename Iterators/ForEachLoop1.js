const coding = ["java", "cpp", "swift", "php", "c", "js", "ruby"];

const values = coding.forEach((item) => {
    console.log(item);
    return item
})
console.log(values)           // for each never return values


const MyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

MyNum.filter((value, index, arr) => {
    console.log(value, index, arr)
})


console.log(MyNum.filter( (val) => (val > 5)))    //type 1

console.log(MyNum.filter((item) => {             // type 2
    return item > 4;
}))

// gives same result just another methid of implementing 
const newNums = [];
MyNum.forEach((num) => {
    if(num > 7){
        newNums.push(num);
    }
})

console.log(newNums)