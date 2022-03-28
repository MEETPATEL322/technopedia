const meetupparticipateModel=require("../model/meetupparticipatemodel")




module.exports.addmeetupparticipate=function(req,res){
  
   let meetupparticipatename=req.body.meetupparticipatename;
   
   let meetupparticipate= new meetupparticipateModel({
       meetupparticipatename: meetupparticipatename,
   })
       
   meetupparticipate.save(function(err,data)
   {
       if(err)
       {
           res.json({msg:"something went wrong",status:-1,data:err})

       }else{
        res.json({msg:"meetupparticipate added",status:200,data:data})
       }
   })
   }
module.exports.getmeetupparticipate=function(req,res){
   meetupparticipateModel.find().populate("user").populate("meetup"). exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"meetupparticipatedetail..",status:200,data:data})
        }
        
    })
}
module.exports.deletemeetupparticipate=function(req,res){
    let meetupparticipateId=req.params.meetupparticipateId
    
    meetupparticipateModel.deleteOne({_id:meetupparticipateId},function(err,data){
    if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"meetupparticipated deleted..",status:200,data:data})
        }
    })
}
module.exports.updatemeetupparticipate=function(req,res)
{
    let parammeetupparticipateId=req.body.meetupparticipateId
    let paramupparticipatename=req.body.meetupparticipatename
    
    
    
 meetupModel.updateOne({_id:parammeetupparticipateId},{meetupparticipatename: parammeetupparticipatename},function(err,data){
       if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }
        else{
            res.json({msg:"meeting updated.",status:200,data:data})
        }
    })
    
}