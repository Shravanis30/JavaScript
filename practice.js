console.log('5' + 3)
console.log('5' - 3)
console.log(NaN === NaN)

// converting a string into Number
const a = '12';
console.log(typeof a);
const b = +'12';
console.log(typeof b);

console.log(typeof "hello");
console.log(typeof +"hello");

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);


// 
const array = ["tanu", "shraavniii", "ttejuuu", "deep"]
const changeValue = document.getElementById("tag") 

changeValue.onclick = () => {
    for(i = 0; i > array.length; i++) {
        changeValue.innerHTML = i;
    }
}
