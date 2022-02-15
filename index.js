const express = require("express");

const app=express()

app.get("/",function(req,res){

res.write("welcome")
res.end();
})

app.get("/login",function(req,res)
{
    res.write("login")
    res.end()
})
app.get("/signup",function(req,res){
    res.write("signup")
    res.end();
})
app.listen(3000,function(){
    console.log("server is started on 3000");
})