function outerFunction(outerVariable) {
    let name = "shravani";  // Fixed quotes around the string
    return function innerFunction(innerVariable) {
        console.log("Name =", name);  // Fixed quotes around the string
    };
}

const closure = outerFunction("shravani");
closure();
