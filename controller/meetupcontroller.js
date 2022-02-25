const meetupModel=require("../model/meetupmodel")




module.exports.addmeetup=function(req,res){
  
   let meetupname=req.body.meetupname;

   let meetup= new meetupModel({
       meetupname: meetupname,
   })
   meetup.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:"meeting added",status:200,data:data})
       }
   })
}
module.exports.getmeetup=function(req,res){
   meetupModel.find().populate("user"). exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"meetingdetail..",status:200,data:data})
        }
        
    })
}
module.exports.deletemeetup=function(req,res){
    let meetupId=req.params.meetupId
    meetupModel.deleteOne({_id:meetupId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"meetingdeleted..",status:200,data:data})
        }
    })
}
module.exports.updatemeetup=function(req,res)
{
    let parammeetupId=req.body.meetupId
    
    
 meetupModel.updateOne({_id:parammeetupId},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"meeting updated.",status:200,data:data})
        }
    })
    
}