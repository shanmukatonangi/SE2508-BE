// console.log("Hello im js , im running on nodejs run time environment")
//local Modules
const mul=require("./different")


console.log(mul)
function add(a,b){
    console.log(a+b)
}

// add(10,12)

function sub(a,b){
    console.log(a-b)
}
// sub(10,12)

mul.mul(10,12)

module.exports={add,sub}