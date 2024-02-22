const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NewNum = num.map((val) => val + 10);
console.log(NewNum)

//chaining 

const Numbers = num
                .map((num) => num * 10)
                .map((num) => num +1)
                .filter( (num) => (num >=41))

console.log(Numbers)