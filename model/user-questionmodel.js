const mongoose = require("mongoose")
//schema
const userquestionSchema = new mongoose.Schema({
    questionname: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
})

const userquestionModel = mongoose.model("userquestion", userquestionSchema)
module.exports = userquestionModel