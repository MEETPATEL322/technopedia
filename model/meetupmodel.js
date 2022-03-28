const mongoose = require("mongoose")
//schema
const meetupSchema = new mongoose.Schema({
    meetupname: {
        type: String,
    },
    url: {
        type: String,
    },
    meetupproposal: {
        type: String,
    },
    date: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    autherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "auther",
    },
    speakerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "speaker",
    },
    
})

const meetupModel = mongoose.model("meetup", meetupSchema)
module.exports = meetupModel