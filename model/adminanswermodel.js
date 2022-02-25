const mongoose = require("mongoose")
//schema
const adminanswerSchema = new mongoose.Schema({
    answer: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    userquestion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userquestion",
    },
    
    
})

const adminanswerModel = mongoose.model("adminanswer", adminanswerSchema)
module.exports = adminanswerModel