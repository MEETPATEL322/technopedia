const mongoose = require("mongoose");
//const { stringify } = require("nodemon/lib/utils");
//schemac
const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required:true
    },
    email: {

        type: String
    },
    password: {
        type: String
    },
    mobileno: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role"
    },
})

    const UserModel=mongoose.model("user",UserSchema)
    module.exports=UserModel;