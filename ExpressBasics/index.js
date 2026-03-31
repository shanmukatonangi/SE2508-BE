const express=require('express');//its is like whole car factory
const exp=express();//it is like the car we are going to make

//"/"=localhost:8888/ = localhost:8888 - get

//localhost:8888/about - get

exp.get("/about",(req,res)=>{
res.send("This is about page")
})

exp.get("/",(req,res)=>{
    // console.log(req)
    res.send("Hello World")
})

exp.listen(8888,()=>{
    console.log("server is running on port 8888");
})