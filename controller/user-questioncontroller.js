const userquestionModel=require("../model/user-questionmodel")

module.exports.adduserquestion=function(req,res){
  
   let questionname=req.body.questionname;

   let userquestion= new userquestionModel({
       questionname: questionname,
   })
   userquestion.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:"question added",status:200,data:data})
       }
   })
}
module.exports.getuserquestion=function(req,res){
   userquestionModel.find().populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"questiondetail..",status:200,data:data})
        }
        
    })
}
module.exports.deleteuserquestion=function(req,res){
    let questionId=req.params.questionId
    userquestionModel.deleteOne({_id:questionId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"questiondeleted..",status:200,data:data})
        }
    })
}
module.exports.updateuserquestion=function(req,res)
{
    let paramquestionId=req.body.questionId
    
    
    userquestionModel.updateOne({_id:paramquestionId},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"questionupdated.",status:200,data:data})
        }
    })
    
}