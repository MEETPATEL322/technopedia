function login(req,res){
    res.write("login")
    res.end()
}
function signup(req,res){

    res.write("signup")
    res.end()
}
module.exports.login=login
module.exports.signup=signup