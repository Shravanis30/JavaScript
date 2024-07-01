function setUserName(username) {
    this.username = username;
}

function createUser(username, email, password) {
    setUserName(username);    // here actually it is not called 

    this.email = email;
    this.password = password
}

const shravani = new createUser("shravani", "shravani@example.com", "1234567890")

console.log(shravani)





function setUserName1(username) {
    this.username = username;
    console.log("called")
}

function createUser1(username, email, password) {
    setUserName1.call(this, username);   // call is used to call and this is imp without this it wont run
    this.email = email;
    this.password = password
}

const tejas = new createUser1("tejas", "tejas@example.com", "1234567890")
console.log(tejas)