// Prototypal inheritance

const User = {
    name: "Shravani",
    email: "Shravani@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'Js assignement',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User;   // old syntax


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)