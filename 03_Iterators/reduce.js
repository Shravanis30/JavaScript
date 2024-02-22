const nums = [1, 2, 3]
const total = nums.reduce(function (acc, currVal) {
    console.log(`acc = ${acc} and currVal = ${currVal}`)
    return acc + currVal
}, 0) // this 0 indicates the initial value of the acc (accumaletor)

console.log(total);

const total1 = nums.reduce((acc, currVal) => {
    console.log(`acc = ${acc} and currVal = ${currVal}`)
    return acc + currVal
}, 0)

console.log(total1)


const shoppingCart = [
    {
        Name: "Js Course",
        price: 2999,
    },
    {
        Name: "py Course",
        price: 999,
    },
    {
        Name: "mobile Dev Course",
        price: 5999,
    },
    {
        Name: "Ai Course",
        price: 22999,
    },
    {
        Name: "ML Course",
        price: 59999,
    },
]

console.log(shoppingCart.reduce((acc, currVal) => acc + currVal.price, 0))