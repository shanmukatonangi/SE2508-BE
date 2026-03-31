const url=require("url")
let myurl="https://www.flipkart.com/search?q=bats&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"

let paredinfofromurl=url.parse(myurl)
console.log(paredinfofromurl)
// const buf=Buffer.alloc(6);
// console.log(buf)



// const hellobuf=Buffer.from("Shanmukh")

// console.log(hellobuf)