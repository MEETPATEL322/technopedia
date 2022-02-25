const tutorialModel=require("../model/tutorialmodel")




module.exports.addtutorial=function(req,res){
  
   let tutorialname=req.body.tutorialname;

   let tutorial= new tutorialModel({
       tutorialname: tutorialname,
   })
   tutorial.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:"tutorial added",status:200,data:data})
       }
   })
}
module.exports.gettutorial=function(req,res){
   tutorialModel.find().populate("user").populate("technology"). exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"tutorialdetail..",status:200,data:data})
        }
        
    })
}
module.exports.deletetutorial=function(req,res){
    let tutorialId=req.params.tutorialId
    tutorialModel.deleteOne({_id:tutorialId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"tutorialdeleted..",status:200,data:data})
        }
    })
}
module.exports.updatetutorial=function(req,res)
{
    let paramtutorialId=req.body.tutorialId
    
    
    tutorialModel.updateOne({_id:paramtutorialId},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"tutorialupdated.",status:200,data:data})
        }
    })
    
}