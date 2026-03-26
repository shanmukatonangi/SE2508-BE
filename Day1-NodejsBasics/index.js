//core modules
const fs=require("fs")

fs.writeFile("test.txt","hello everyone this is shanmukh",(err)=>{
    if(err){
        console.log("error while creating file")
    }else{
        console.log("File Created")
    }
})