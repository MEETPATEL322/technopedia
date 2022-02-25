const mongoose = require("mongoose")
//schema
const tutorialSchema = new mongoose.Schema({
    tutorialname: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    technology: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "technology",
    },
    
    
})

const tutorialModel = mongoose.model("tutorial", tutorialSchema)
module.exports = tutorialModel