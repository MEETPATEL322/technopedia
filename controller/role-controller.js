//const req = require("express/lib/request")
const res = require("express/lib/response")
const req = require("express/lib/request")
const RoleModel = require("../model/role-model")
module.exports.addrole = function (req, res) {

    console.log(req.body.roleName);
    res.json({ msg: "role added", status: 200, data: req.body })

    let role = new RoleModel({
        roleName: req.body.roleName
    })
    role.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "something went wrong", status: -1, data: req.body })

        } else {
            res.json({ msg: "roleadded", status: 200, data: success })
        }
    })
}

module.exports.getAllroles=function(req,res)
{
    RoleModel.find(function(err,roles)
    {
        if(err)
        {
            res.json({msg:"something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"roles..",status:200,data:roles})
        }
    })
}

module.exports.deleterole=function(req,res){
    let roleId=req.params.roleId
    RoleModel.deleteOne({"_id":roleId},function(err,data){
        if(err){
            res.json({msg:"something went wrong",status:-1,data:err})
        }else{
            res.json({msg:"removed roles....",status:200,data:data})
        }
    })
}