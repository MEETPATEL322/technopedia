const UserModel=require("../model/user-model")

//add user
module.exports.addUser=function(req,res)
{
    let firstname=req.body.firstname
    let email=req.body.email
    let password=req.body.password
    let mobileno=req.body.mobileno

    let user = new UserModel({
        firstname:firstname,
        email:email,
        password:password,
        mobileno:mobileno,
    })
user.save(function(err,data){
    if(err){
        res.json({msg:"something went wrong",status:-1,data:err})
    }
    else{
        res.json({msg:"useradded..",status:200,data:data})
    }
})
}

module.exports.getUsers=function(req,res){
    UserModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"usersdetail..",status:200,data:data})
        }
        
    })
}
module.exports.deleteuser=function(req,res){
    let userId=req.params.userId
    UserModel.deleteOne({_id:userId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"userdeleted..",status:200,data:data})
        }
    })
}
module.exports.updateuser=function(req,res)
{
    let paramuserId=req.body.userId
    let paramemail=req.body.email
    let parampassword=req.body.password
    
    UserModel.updateOne({_id:paramuserId},{email:paramemail},{password:parampassword},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"userupdated.",status:200,data:data})
        }
    })
    
}