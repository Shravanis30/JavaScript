const nums = [1, 2, 3] 
const total = nums.reduce(function (acc, currVal) {
    console.log(`acc = ${acc} and currVal = ${currVal}`)
    return acc + currVal
}, 0) // this 0 indicates the initial value of the acc (accumaletor)

console.log(total);

const total1 = nums.reduce( (acc, currVal) => {
    console.log(`acc = ${acc} and currVal = ${currVal}`)
    return acc + currVal
}, 0)

console.log(total1)