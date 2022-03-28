const mongoose = require("mongoose")
//schema
const questionSchema = new mongoose.Schema({
    questionname: {
        type: String,
    },
    description: {
        type: String,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
})

const questionModel = mongoose.model("question", questionSchema)
module.exports = questionModel