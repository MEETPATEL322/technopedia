const mongoose = require("mongoose");
//const { stringify } = require("nodemon/lib/utils");
//schemac
const BadgeSchema = new mongoose.Schema({
    badgetittle: {
        type: String,
        required:true
    },
    description: {

        type: String
    },
    rank: {
        type: String
    },
   
})

    const badgeModel=mongoose.model("badge",BadgeSchema)
    module.exports=badgeModel;