//  story after ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}


const shravani = new User("shravani", "shravni@example.com", "1234567890")
console.log(shravani.encryptPassword());
console.log(shravani.changeUsername());



// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}asdfghjkl;'`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const Tejas = new User("Tejas", "tejas@gmail.com", "1234567890")

console.log(Tejas.changeUsername());
console.log(Tejas.encryptPassword());

