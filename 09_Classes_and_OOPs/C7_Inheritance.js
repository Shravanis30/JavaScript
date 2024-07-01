class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`New course was added by ${this.username}`)
    }
}

const payal = new Teacher("payal", "chai@fb.com", "567897654")
console.log(Teacher)
payal.addCourse()

const tejas = new User("tejas")
tejas.logMe();

// console.log(payal === tejas)
// console.log(tejas === Teacher)
// console.log(payal instanceof tejas);    // not callable
console.log(payal instanceof Teacher);
console.log(payal instanceof User);
console.log(Teacher instanceof User);
console.log(tejas instanceof User);
console.log(tejas instanceof Teacher);
// console.log(tejas instanceof payal);     // not callable
