const mongoose = require("mongoose")


const serviceSchema  = new mongoose.Schema({
        gameName:{
            type:String,
            required:true
        },
        gameExperience:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true,
            min:0,
            max:50
        },
        description:{
            type:String,
            required:true
        }

})

const Service = mongoose.model("Service", serviceSchema)

module.exports = Service