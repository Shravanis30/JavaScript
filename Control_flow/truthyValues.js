const userEmail = "shravani@123"
if(userEmail) {
    console.log("1) got the email")
}
else {
    console.log("1) didnt got")
}

const userEmail1 = ""
if(userEmail1) {
    console.log("2) got the email")
}
else {
    console.log("2) didnt got")
}

const userEmail2 = []
if(userEmail2) {
    console.log("3) got the email")
}
else {
    console.log("3) didnt got")
}


//fasly value
// false, 0, -0, "", BigInt 0n, undefined, null, NaN

// truthy values
// true, "0", "false", 'fasle', " ", [], {}, function() {},

false == 0 (ans=>true)
false == ''(ans=>true)
