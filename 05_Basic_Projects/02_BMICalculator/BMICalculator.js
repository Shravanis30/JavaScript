const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const heightvalue = document.querySelector('#height').value;
    const weightvalue = document.querySelector('#weight').value;
    const height = parseInt(heightvalue);
    const weight = parseInt(weightvalue);
    const results = document.querySelector('#result');

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please enter the valid height`;
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please enter the valid weight`;
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);

        if (BMI < 18.6) {
            results.innerHTML = `<span>Your Body Mass Index (BMI) = ${BMI} that means you are UNDER WEIGHT</span>`;
        }
        else if (BMI > 24.9) {
            results.innerHTML = `<span>Your Body Mass Index (BMI) = ${BMI} that means you are OVER WEIGHT</span>`;
        }
        else {
            results.innerHTML = `<span>Your Body Mass Index (BMI) = ${BMI} that means you are in normal range of weight</span>`;

        }
    }
})

