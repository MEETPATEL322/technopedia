const mongoose = require("mongoose")
//schema
const meetupparticipateSchema = new mongoose.Schema({
    meetupparticipatename: {
        type: String,
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    meetup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "meetup",
    },
   
    
})

const meetupparticipateModel = mongoose.model("meetupparticipate", meetupparticipateSchema)
module.exports = meetupparticipateModel