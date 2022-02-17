const fs = require("fs")



function login(req, res) {
    let loginhtml = fs.readFileSync("./views/login.html")
    res.write(loginhtml)
    res.end()
}
function signup(req, res) {
    let signuphtml = fs.readFileSync("./views/signup.html")
    res.write(signuphtml)
    res.end()
}
function saveuser(req, res) {
    console.log(req.body)
    res.json({

        msg: "done dona don",
        status: 200,
        data: req.body
    })
}

    module.exports.login = login
    module.exports.signup = signup
    module.exports.saveuser = saveuser
    