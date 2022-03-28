const tutorialModel=require("../model/tutorialmodel")




module.exports.addtutorial=function(req,res){
  
   let tutoriallbl=req.body.tutorialbl;
   let url=req.body.url;
   let isapproved=req.body.isapproved;
   let rejectreason=req.body.rejectreason;

   let tutorial= new tutorialModel({
       tutoriallbl: tutoriallbl,
       url:url,
       isapproved:isapproved,
       rejectreason:rejectreason,
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
   tutorialModel.find().populate("user"). exec(function(err,data){
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
    let paramtutoriallbl=req.body.tutoriallbl
    let paramurl=req.body.url
    let paramisapproved=req.body.isapproved
    let paramrejectreason=req.body.rejectreason

    
    
    tutorialModel.updateOne({_id:paramtutorialId},{tutoriallbl:paramtutoriallbl},{url:paramurl},{isapproved:paramisapproved},{rejectreason:paramrejectreason},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"tutorialupdated.",status:200,data:data})
        }
    })
    
}