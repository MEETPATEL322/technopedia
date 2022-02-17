
module.exports.addrole=function (req, res) {

    console.log(req.body.roleName)
    res.json({ msg: "roleadded", status: 200, data: req.body })
}