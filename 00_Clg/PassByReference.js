let obj = { 
    key: "value" 
};

let name = "shraavniii"

function modifyObject(o, name) {
    o.key = "new value";  // This modifies the original object
    name = "ttejuuu"
}

modifyObject(obj);
console.log(obj.key);  // Output: "new value"
console.log(name);
