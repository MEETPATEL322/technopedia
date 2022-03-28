//const req = require("express/lib/request")
const res = require("express/lib/response")
const req = require("express/lib/request")
const TechnologylblModel = require("../model/tachnology-lbl")

module.exports.addlabel = function (req, res) {

    console.log(req.body.labelName);
    res.json({ msg: "Label added", status: 200, data: req.body })

    let label = new TechnologylblModel({
        labelName: req.body.labelName
    })
    role.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "something went wrong", status: -1, data: req.body })

        } else {
            res.json({ msg: "labeladded", status: 200, data: success })
        }
    })
}

module.exports.getAlllabel=function(req,res)
{
    TechnologylblModel.find(function(err,roles)
    {
        if(err)
        {
            res.json({msg:"something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"labels.....",status:200,data:roles})
        }
    })
}

module.exports.deletelabel=function(req,res){
    let labelId=req.params.labelId
    TechnologylblModel.deleteOne({"_id":labelId},function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"removed labels....",status:200,data:data})
        }
    })
}
module.exports.updatelabel=function(req,res)
{
    let labelId=req.body.labelId
    let labelName=req.body.labelName

    TechnologylblModel.updateOne({_id:labelId},{roleName:labelName},function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"updates roles....",status:200,data:data})
        }
    })
}