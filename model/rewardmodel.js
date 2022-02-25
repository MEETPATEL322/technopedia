const mongoose = require("mongoose")
//schema
const rewardSchema = new mongoose.Schema({
    reward: {
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
    adminanswer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "adminanswer",
    }, 
    tutorial: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tutorial",
    },
    
    
})

const rewardModel = mongoose.model("reward",rewardSchema )
module.exports = rewardModel