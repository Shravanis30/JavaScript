let b1 = document.querySelector(".mode");
let currentMode = "black"; // make it dark
let body = document.querySelector("body")
modeBtn.addEventListener("click", () => {
    if(currentMode === "light") {
        currentMode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else {
        currentMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }

    console.log(currentMode);
})

// let modeBtn = document.querySelector("#black");
// let currentMode = "light"; // make it dark
// let body = document.querySelector("body")
// modeBtn.addEventListener("click", () => {
//     if(currentMode === "light") {
//         currentMode = "dark";
//         body.classList.remove("light");
//         body.classList.add("dark");
//     }
//     else {
//         currentMode = "light";
//         body.classList.remove("dark");
//         body.classList.add("light");
//     }

//     console.log(currentMode);
// })