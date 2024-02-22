//Maps

const map = new Map()
map.set('IN', "India");
map.set('USA', "United State Of America");
map.set('Fr', "France");
map.set('IN', "India")  // double enteries will not be shown in the output
console.log(map);


for (const key of map) {
    console.log(key)                 // gives result in the form of array
}                    

for (const [key, value] of map) {
    console.log(key, ':-', value)
}


// in object

const MyHeros = {
    hero1 : "aai",
    hero2 : "papa",
    hero3 : "ttejuuu",
    hero4 : "deep",

}

// for (const [heroNo , Name ] of MyHeros) {         // this wont work for of is not used to print objects
//     console.log(heroNo, ':-', Name);
// }

//for in
for (const key in MyHeros) {
    console.log(key)                       // this wil give output only keys
}

for (const key in MyHeros) {
    console.log(MyHeros[key])               // this wil give output only values
}

for (const key in MyHeros) {
    console.log(`${key} :- ${MyHeros[key]}`)   // perfect output
}

const programLanguages = ["java", "c++", "c", "python", "swift", "js"];
for (const key in programLanguages) {
    console.log(key);                     // this will give keys(index) not the values
}

for (const key in programLanguages) {
    console.log(programLanguages[key])     // this will give values
}


// on above map example
for (const key in map) {
    console.log(key)
}