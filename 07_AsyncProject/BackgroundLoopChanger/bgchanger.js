
const RandomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

console.log(RandomColor())

let IntervalId;
const startChangingColor = function() {

    const bgchanger = function() {
        document.body.style.background = RandomColor();
    }
    if(!IntervalId) {                   // better code pratice
        IntervalId = setInterval(bgchanger, 1000)
    }

}
const stopChangingColor = function() {

    clearInterval(IntervalId)
    IntervalId = null;          // better code pratice
}


document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
