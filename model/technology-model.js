const mongoose=require("mongoose")
//schema
const technologySchema=new mongoose.Schema({
    technologylbl:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
})

const technologyModel=mongoose.model("technology",technologySchema)
module.exports=technologyModel