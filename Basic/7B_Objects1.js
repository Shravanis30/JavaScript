// ********************************** SINGLETON **********************************
const TinderUser = new Object();  // singleton object
const TinderUser1 = {}           // non singleton object
// console.log(TinderUser);
// console.log(TinderUser1);   // both gives same result


TinderUser.id = "shravani123";
TinderUser.loggedIn = false;
TinderUser.age = 18;
// console.log(TinderUser);

// console.log(Object.keys(TinderUser));   // returns all the keywords from the tinderuser
// console.log(Object.values(TinderUser)); // returns all the values from the tinderuser
// console.log(Object.entries(TinderUser)); // returns all the elements in the form of array from the tinderuser
// console.log(TinderUser.hasOwnProperty('age')); // it is use to check wheather element is persent or not

const User = {
    email: "shravani@12345",
    fullName: {
        userFullName: {
            firstName: "shraavniii",
            lastName: "salunke",
        }
    }
}

// console.log(User.fullName.userFullName.firstName)

const obj1 = {1: "meow", 2: "bow"}
const obj2 = {3: "chiv", 4: "caw"}
const obj3 = {5: "roar", 6: "hiss"}
const obj4 = {7: "hop", 8: "cringe"}

// const objone = console.log(Object.assign(obj1 ,obj2, obj3, obj4));
// const objtwo = console.log(Object.assign({}, obj1 ,obj2, obj3, obj4));  // give {} is proper way
const newway = {...obj1, ...obj2, ...obj3, ...obj4};     // spread operator
// console.log(newway);

// console.log(objone == objtwo)
// console.log(objone === objtwo)

const users = [
    {
        id: 1,
        email: "some@gamil.com",
    },
    {
        id: 2,
        email: "some@gamil.com",
    },
    {
        id: 3,
        email: "some@gamil.com",
    }
]

// console.log(users[1].email)

