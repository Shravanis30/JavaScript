class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    static createId() {    // by using static stop accessing the method or property
        return `123`
    }
}

const shravani = new User("Shravani")
// console.log(shravani.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
} 

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe();
console.log(iphone.createId())    // because static is used in the createID