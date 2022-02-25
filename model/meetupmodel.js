const mongoose = require("mongoose")
//schema
const meetupSchema = new mongoose.Schema({
    meetupname: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
   
    
    
})

const meetupModel = mongoose.model("meetup", meetupSchema)
module.exports = meetupModel