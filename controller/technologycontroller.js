const technologyModel=require("../model/technology-model")

module.exports.addtechnology=function(req,res){
  
   let technologylbl=req.body.technologylbl

   let technology= new technologyModel({
       technologylbl:technologylbl
   })
   technology.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:"technology added",status:200,data:data})
       }
   })
}
module.exports.gettechnology=function(req,res){
    technologyModel.find().populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"technologydetail..",status:200,data:data})
        }
        
    })
}
module.exports.deletetechnology=function(req,res){
    let technologyId=req.params.technologyId
    technologyModel.deleteOne({_id:technologyId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"technologydeleted..",status:200,data:data})
        }
    })
}
module.exports.updatetechnology=function(req,res)
{
    let paramtechnologyId=req.body.technologyId
    let paramtechnologylbl=req.body.technologylbl
    
    
    technologyModel.updateOne({_id:paramtechnologyId},{technologylbl:paramtechnologylbl},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"technologyupdated.",status:200,data:data})
        }
    })
    
}