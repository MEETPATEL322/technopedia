const answerModel=require("../model/answermodel")

module.exports.addanswer=function(req,res){
  
   let answername=req.body.answername;
   let docURL=req.body.docURL;

   let answer= new answerModel({
       answername: answername,
       docURL: docURL,
   })
   answer.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:"answer added",status:200,data:data})
       }
   })
}
module.exports.getanswer=function(req,res){
   answerModel.find().populate("user").populate("question"). exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"answerdetail..",status:200,data:data})
        }
        
    })
}
module.exports.deleteanswer=function(req,res){
    let answerId=req.params.answerId
    answerModel.deleteOne({_id:answerId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"answerdeleted..",status:200,data:data})
        }
    })
}
module.exports.updateanswer=function(req,res)
{
    let paramanswerId=req.body.answerId
    
    
    answerModel.updateOne({_id:paramanswerId},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"answerupdated.",status:200,data:data})
        }
    })
    
}