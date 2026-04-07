const express=require("express")
const app=express()

const mongoose = require('mongoose');


app.use(express.json())//it is used to parse the incoming request body in JSON format and make it available in req.body
async function main() {
  await mongoose.connect('mongodb://localhost:27017/shanredbus');
console.log("connected to database")
  
}
main().catch(err => console.log(err));


// {
//     "username":"Ankit",
//     "email":"ankit@gm.com",
//     "password":"ankit123"
// }

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    }
})

const User=mongoose.model("User",userSchema)//it is creating a collection "User" and it is accepting users document in the form of userSchema


app.post("/register",async(req,res)=>{
    try {
        const {username,email,password}=req.body
        const user=new User({username,email,password})
        await user.save()
        res.status(201).json({message:"User registered successfully"})
    } catch (error) {
        res.status(500).json({message:"Error registering user",error:error.message})
    }
})

//mongodb+srv://redbus:redbus@cluster0.vo8uwfj.mongodb.net/

app.get("/",(req,res)=>{
res.send("Welcome to our bus booking app")
})

app.listen(8888,()=>{
    console.log("server is running on port 8888")
})