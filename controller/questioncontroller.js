const questionModel=require("../model/questionmodel")

module.exports.addquestion=function(req,res){
  
   let questionname=req.body.questionname;
   let description=req.body.description;

   let question= new questionModel({
       questionname: questionname,
       description: description,
   })
   question.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:"question added",status:200,data:data})
       }
   })
}
module.exports.getquestion=function(req,res){
   questionModel.find().populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"questiondetail..",status:200,data:data})
        }
        
    })
}
module.exports.deletequestion=function(req,res){
    let questionId=req.params.questionId


    questionModel.deleteOne({_id:questionId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"questiondeleted..",status:200,data:data})
        }
    })
}
module.exports.updatequestion=function(req,res)
{
    let paramquestionId=req.body.questionId
    
    
    questionModel.updateOne({_id:paramquestionId},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"questionupdated.",status:200,data:data})
        }
    })
    
}