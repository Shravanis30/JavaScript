let x = 10;

function modifyValue(a) {
    a = 20;  // Change only affects 'a', not 'x'
}

modifyValue(x);
console.log(x);  // Output: 10
