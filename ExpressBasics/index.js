const express=require('express');//its is like whole car factory
const exp=express();//it is like the car we are going to make

//"/"=localhost:8888/ = localhost:8888 - get

//localhost:8888/about - get

// exp.get("/about",(req,res)=>{
// res.send("This is about page")
// })
exp.use(express.json())//this is used to parse the json data which we are receiving from fe

let users=[
    {id:1,name:"John",age:30},
    {id:2,name:"Jane",age:25},
    {id:3,name:"Bob",age:35}
]

exp.get("/",(req,res)=>{
    res.send("Hello World")
})

//localhost:8888/users - get all users
exp.get("/users",(req,res)=>{
    res.json(users)

})

//localhost:8888/user/3- get user by id
//localhost:8888/user/:id

exp.get("/user/:id",(req,res)=>{
    console.log(req.params.id);
    let id =req.params.id
    let user=users.find((u)=>u.id==id)
    res.json(user)

})

exp.get("/username/:name",(req,res)=>{
    console.log(req.params.name);
    let name =req.params.name
    let user=users.find((u)=>u.name==name)
    // res.json(user)
    if(user){
        res.json(user)
    }else{
        res.send(name+" not found in our database")
    }
})

//localhost:8888/createuser - post - we gonna save information od the data which we are receiving from fe
exp.post("/createuser",(req,res)=>{
    let newUser=req.body;//we are receiving data from fe and storing it in newUser variable
    newUser.id=users.length+1;//we are assigning id to the new user
   users.push(newUser);//we are pushing the new user to the users array
   res.json(newUser,"user added");//we are sending the new user as response to the fe
})

// localhost:8888/contact-> this is contact page
// exp.get("/contact",(req,res)=>{
//     res.send("This is contact page")
// })

// exp.get("/services",(req,res)=>{
//     res.send("This is services page.......")
// })


//rest api
//localhost:8888/:name - delete-> we gonna delete the user by name
exp.delete("/user/:name",(req,res)=>{
    let name=req.params.name;
    users=users.filter((u)=>u.name!==name);//we are filtering the users array and returning only those users whose name is not equal to the name we want to delete
  res.send(name+" has been deleted from our database")
})


exp.listen(8888,()=>{
    console.log("server is running on port 8888");
})