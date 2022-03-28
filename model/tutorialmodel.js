const mongoose = require("mongoose")
//schema
const tutorialSchema = new mongoose.Schema({
  
    technolohgylbl: {
        type: String,
    },
    url: {
        type: String,
    },
    isapproved: {
        type: String,
        
    },
    rejectreason:{
        type:String,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
   
    
    
})

const tutorialModel = mongoose.model("tutorial", tutorialSchema)
module.exports = tutorialModel