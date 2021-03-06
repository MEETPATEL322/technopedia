const express = require("express");
const mongoose=require("mongoose")

const sessioncontroller=require("./controller/sessioncontroller")
const rolecontroller=require("./controller/role-controller")
const usercontroller=require("./controller/user-controller")
const technologycontroller=require("./controller/technologycontroller")
const userquestioncontroller=require("./controller/user-questioncontroller")
const adminanswercontroller=require("./controller/adminanswercontroller")
const tutorialcontroller=require("./controller/tutorialcontroller")
const meetupcontroller=require("./controller/meetupcontroller")
const rewardcontroller=require("./controller/rewardcontoller")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database
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

//urls
app.get("/login",sessioncontroller.login)
app.get("/signup",sessioncontroller.signup)
app.post("/saveuser",sessioncontroller.saveuser)
app.post("/roles",rolecontroller.addrole)
app.get("/roles",rolecontroller.getAllroles )
app.delete("roles/:roleId",rolecontroller.deleterole)
app.put("/roles",rolecontroller.updaterole)
app.post("/users",usercontroller.addUser)
app.get("/users",usercontroller.getUsers)
app.delete("/users/:userId",usercontroller.deleteuser)
app.put("/users",usercontroller.updateuser)
app.post("/technology",technologycontroller.addtechnology)
app.get("/technology",technologycontroller.gettechnology)
app.delete("/technology/:technologyId",technologycontroller.deletetechnology)
app.put("/technology",technologycontroller.updatetechnology)
app.post("/userquestion",userquestioncontroller.adduserquestion)
app.get("/userquestion",userquestioncontroller.getuserquestion)
app.delete("/userquestion/:questionId",userquestioncontroller.deleteuserquestion)
app.put("/userquestion",userquestioncontroller.updateuserquestion)
app.post("/adminanswer",adminanswercontroller.addadminanswer)
app.get("/adminanswer",adminanswercontroller.getadminanswer)
app.delete("/adminanswer/:answerId",adminanswercontroller.deleteadminanswer)
app.put("/adminanswer",adminanswercontroller.updateadminanswer)
app.post("/tutorial",tutorialcontroller.addtutorial)
app.get("/tutorial",tutorialcontroller.gettutorial)
app.delete("/tutorial/:tutorialId",tutorialcontroller.deletetutorial)
app.put("/tutorial",tutorialcontroller.updatetutorial)
app.post("/meetup",meetupcontroller.addmeetup)
app.get("/meetup",meetupcontroller.getmeetup)
app.delete("/meetup/:meetupId",meetupcontroller.deletemeetup)
app.put("/meetup",meetupcontroller.updatemeetup)
app.post("/reward",rewardcontroller.addreward)
app.get("/reward",rewardcontroller.getreward)
app.delete("/reward/:rewardId",rewardcontroller.deletereward)
app.put("/reward",rewardcontroller.updatereward)
//server
app.listen(3000,function(){
    console.log("server is started on 3000");
})