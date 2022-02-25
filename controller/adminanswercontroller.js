const adminanswerModel=require("../model/adminanswermodel")

module.exports.addadminanswer=function(req,res){
  
   let answer=req.body.answer;

   let adminanswer= new adminanswerModel({
       answer: answer,
   })
   adminanswer.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:"answer added",status:200,data:data})
       }
   })
}
module.exports.getadminanswer=function(req,res){
   adminanswerModel.find().populate("user").populate("userquestion"). exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"answerdetail..",status:200,data:data})
        }
        
    })
}
module.exports.deleteadminanswer=function(req,res){
    let answerId=req.params.answerId
    adminanswerModel.deleteOne({_id:answerId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"answerdeleted..",status:200,data:data})
        }
    })
}
module.exports.updateadminanswer=function(req,res)
{
    let paramanswerId=req.body.answerId
    
    
    adminanswerModel.updateOne({_id:paramanswerId},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"answerupdated.",status:200,data:data})
        }
    })
    
}