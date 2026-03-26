const maths=require("./index")

function mul(a,b){
    console.log(a*b)
}

mul(10,12)

console.log(maths)


maths.add(10)
maths.sub(10,12)
// maths={ 
//     add: "ADD",
//     sub: [Function: sub]
    
//     }

module.exports={
    mul
}