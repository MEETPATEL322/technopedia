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


