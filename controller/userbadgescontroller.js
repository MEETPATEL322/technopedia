const userbadgeModel=require("../model/userbadgesmodel")




module.exports.adduserbadge=function(req,res){
  
   let earndate=req.body.earndate;
   
   let userbadge= new userbadgeModel({
       earndate: earndate,
   })
       
   userbadge.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:" user badge  added",status:200,data:data})
       }
   })
   }
module.exports.getuserbadge=function(req,res){
   userbadgeModel.find().populate("user").populate("badge"). exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"userbadgedetail..",status:200,data:data})
        }
        
    })
}
module.exports.deleteuserbadge=function(req,res){
    let userbadgeId=req.params.userbadgeId
    
    userbadgeModel.deleteOne({_id:userbadgeId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"user badge deleted..",status:200,data:data})
        }
    })
}
module.exports.updateuserbadge=function(req,res)
{
    let paramuserbadgeId=req.body.userbadgeId
    let paramearndate=req.body.earndate
    
    
    
 meetupModel.updateOne({_id:paramuserbadgeId},{earndate:paramearndate},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"user badge updated.",status:200,data:data})
        }
    })
    
}