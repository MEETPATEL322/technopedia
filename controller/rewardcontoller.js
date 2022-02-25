const rewardModel=require("../model/rewardmodel")



module.exports.addreward=function(req,res){
  
   let reward=req.body.reward;

   let rewards= new rewardModel({
       reward: reward,
   })
   rewards.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:"reward added",status:200,data:data})
       }
   })
}
module.exports.getreward=function(req,res){
  rewardModel.find().populate("user").populate("userquestion"). populate("adminanswer").populate("tutorial").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"rewarddetail..",status:200,data:data})
        }
        
    })
}
module.exports.deletereward=function(req,res){
    let rewardId=req.params.rewardId
   rewardModel.deleteOne({_id:rewardId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"rewarddeleted..",status:200,data:data})
        }
    })
}
module.exports.updatereward=function(req,res)
{
    let paramrewardId=req.body.rewardId
    
    
    rewardModel.updateOne({_id:paramrewardId},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"rewardupdated.",status:200,data:data})
        }
    })
    
}