const mongoose = require("mongoose")
//schema
const userbadgeSchema = new mongoose.Schema({
    earndate: {
        type: String,
    },
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    badge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "badge",
    },
   
    
})

const userbadgeModel = mongoose.model("userbadge", userbadgeSchema)
module.exports = userbadgeModel