const express = require("express");
const sessioncontroller=require("./controller/sessioncontroller")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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

app.listen(3000,function(){
    console.log("server is started on 3000");
})