const mongoose = require("mongoose")
//schema
const answerSchema = new mongoose.Schema({
    answername: {
        type: String,
    },
    docURL: {
        type: String,
    },
    

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "question",
    },
    
    
})

const answerModel = mongoose.model("answer", answerSchema)
module.exports = answerModel