const user = {
    username: "Shravanis30",
    loginCount: 100,
    signedIn: true,

    userDetails: function() {
        console.log("Got user details from the database");
        console.log(`username: ${this.username}`)    // this keyword is important if you dont write this keyword in it will cause error because it doesnt know refernceshould be passed
        console.log(this)      // this referes to the current context
    }
}
console.log(user.username);
console.log(user.userDetails());

console.log(this);   // this will return empty because there is nothing in the gobal contex





// this "new" keyword is "constructor function" this allows you to create multiple instances from the single object literal 
// const promiseOne = new Promise()
// const date = new Date();


function User(username, loginCount, isLoggenIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggenIn = isLoggenIn;

    this.greeting = function() {
        console.log(`welcome ${this.username}`)
    }

    return this
}

const userOne = User("shravani", 30, true);
const userTwo = User("tejas", 19, false); // not using new keyword will over write all the values
console.log(userOne)

const userThree = new User("shraavniii", 85, false);   // all unnecssary stuff is also reduced
const userFour = new User("ttejuuu", 58, true)
console.log(userThree)
console.log(userFour)
console.log(userThree.constructor)


// while this keyword is used the empty object or instance is created
// 1. new oject is created
// 2. constructor function is called becoause of new keyword (this pack up all your argumenst and give it to you)
// 3. in this keyword all the arguments are injected in it
// 4. we get it in the functions

// LOOK OUT FOR INSTANCEOF