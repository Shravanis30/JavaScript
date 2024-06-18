const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);

        const color = event.target.id;
        body.style.color = color;

        if(color === 'black') {
            body.style.color = 'white';
        }
        else {
            body.style.color = 'black';

        }

        if (event.target.id === 'black') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'gray') {
            body.style.backgroundColor = event.target.id;
        }

        if (event.target.id === 'red') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
        }

        if (event.target.id === 'pink') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'purple') {
            body.style.backgroundColor = event.target.id;
        }

    });
});
