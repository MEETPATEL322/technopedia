const mongoose = require("mongoose");

//schema

let TechnologylblSchema = new mongoose.Schema({
    labelName:{
        type:String
    }
})

//model
let TechnologylblModel=mongoose.model("technologylbl",TechnologylblSchema)

module.exports=TechnologylblModel