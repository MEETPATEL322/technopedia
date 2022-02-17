const express = require("express");
const mongoose=require("mongoose")

const sessioncontroller=require("./controller/sessioncontroller")
const rolecontroller=require("./controller/role-controller")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 mongoose.connect('mongodb://localhost:27017/technopedia',function(err){
     if(err){
         console.log("db connection ids failed");
         console.log(err);
     }
     else{
         console.log("db connected")
     }
 })


app.get("/",function(req,res){

res.write("welcome")
res.end();
})

/*app.get("/login",function(req,res)
{
    res.write("login")
    res.end()
})
app.get("/signup",function(req,res){
    res.write("signup")
    res.end();
})*/
app.get("/login",sessioncontroller.login)
app.get("/signup",sessioncontroller.signup)
app.post("/saveuser",sessioncontroller.saveuser)
app.post("/rolls",rolecontroller.addrole)
app.listen(3000,function(){
    console.log("server is started on 3000");
})