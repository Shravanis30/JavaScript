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

promiseThree.then(function (user) {
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
}).catch(function (error) {
    console.log(error)
}).finally(() => {
    console.log('The promise is either resolved or rejected')
})





const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "ttejuuu", password: "ttejuuu123" })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive();






async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("E:", error)  
    }
}
getAllUsers()




// this is printed 1st then the before consolelogs what can be the reason?
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error)=> {
    console.log(error);
})