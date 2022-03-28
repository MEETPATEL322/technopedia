const meetupModel=require("../model/meetupmodel")




module.exports.addmeetup=function(req,res){
  
   let meetupname=req.body.meetupname;
   let url=req.body.url;
   let meetupproposal=req.bodymeetupproposal;
   let date=req.body.date;

   let meetup= new meetupModel({
       meetupname: meetupname,
       url:url,
       meetupproposal:meetupproposal,
       date:date,
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
    let paramurl=req.body.url
    let parammeetupproposal=req.body.meetupproposal
    let paramdate=req.body.date
    
    
 meetupModel.updateOne({_id:parammeetupId},{url:paramurl},{meetupproposal:parammeetupproposal},{date:paramdate},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"meeting updated.",status:200,data:data})
        }
    })
    
}