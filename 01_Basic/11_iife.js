// Prevents Global Namespace Pollution:
// IIFEs limit variables and functions to their private scope, 
// avoiding conflicts with other code on the global object. 

// Creating Private Variables and Functions:
// IIFEs provide a controlled environment for variables and functions 
// that have no business being global

const favName = undefined;
(function message () {
    console.log(`hellooo welcome!!`);
}) (); //itis compulsory to give semicolon after the iife functions bcoz it cause error
//  this is actually () ()
 
// consider it as the normal functions and give parameter
( (favName) => {
    console.log(`heyyy uhhh ${favName}`)
}) ('shraavniii')