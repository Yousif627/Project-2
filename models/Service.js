const mongoose = require("mongoose")


const serviceSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    
    gameName: {
        type: String,
        required: true
    },
    gameExperience: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 50
    },
    description: {
        type: String,
        required: true
    },
    

})

const Service = mongoose.model("Service", serviceSchema)

module.exports = Service