// Write a script that reads an integer and displays whether it is a prime number or not
var temp = 0;
var num = 11;
var i;
for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
        temp++;
        break;
    }
}
if (temp == 0 && num > 1)
    console.log(num + " is a Prime Number");
else if (num == 1)
    console.log(num + " is not a Prime Number nor composite number");
else
    console.log(num + " is not a Prime Number");

