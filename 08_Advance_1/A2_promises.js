const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task 1 ');
        resolve();
    }, 1000)
})
// .then() connection is with resolve inside .then we get call back means a function
promiseOne.then(function () {
    console.log("Promise consumed")
});





new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async task 2 resolved");
});




const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Shravani", email: 'shravani123@example.com' });
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})





const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "shravani", password: "shravani123" })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {            // chaining 
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => {
    console.log('The promise is either resolved or rejected')
})
