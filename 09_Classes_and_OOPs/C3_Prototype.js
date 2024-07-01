const myName = "   shravani  ";
const myPetName = "    Shraavniii    "
console.log(myName.trim().length)
console.log(myPetName.trim().length)
console.log(myName.trueLength)



let heros = ["Thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.shraavniii = function() {
    console.log(`Shraavniii is present in all objects`)
}
heroPower.shraavniii();
heros.shraavniii();

Array.prototype.shravani = function() {
    console.log(`shravani says hiee!!`);
}

heros.shravani();
// heroPower.shravani();






// Inheritance topics start from here (but all basic cover in next file)


let anotherUsername = "     shravaniii     ";

String.prototype.trueLength = function() {
    console.log(`${this}`)
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}

console.log(anotherUsername.length);
anotherUsername.trueLength();
"ChaiAurCode".trueLength();
"Sulakshana".trueLength();



// in browser envirnoment : this refers to window
// in node envirnoment : this refers to {}