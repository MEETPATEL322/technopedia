const badgeModel=require("../model/badgesmodel")

//add user
module.exports.addbadge=function(req,res)
{
    let badgetittle =req.body.badgetittle
    let description=req.body.description
    let rank=req.body.rank
   
    let badge = new badgeModel({
    badgetittle:badgetittle,
        description:description,
        rank:rank,
        
    })
badge.save(function(err,data){
    if(err){
        res.json({msg:"something went wrong",status:-1,data:err})
    }
    else{
        res.json({msg:"badgeadded..",status:200,data:data})
    }
})
}

module.exports.getbadge=function(req,res){
    badgeModel.find().exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"badgedetail..",status:200,data:data})
        }
        
    })
}
module.exports.deletebadge=function(req,res){
    let badgeId=req.params.badgeId
    badgeModel.deleteOne({_id:bageId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"badgedeleted..",status:200,data:data})
        }
    })
}
module.exports.updatebadge=function(req,res)
{
    let parambadgeId=req.body.bagdeId
    let paramdescription=req.body.description
    let paramprank=req.body.rank
    
    
    badgeModel.updateOne({_id:parambadgeId},{description:paramdescription},{rank:paramprank},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"badgeupdated.",status:200,data:data})
        }
    })
    
}