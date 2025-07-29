const mongoose = require("mongoose")


const traineeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    age:{
        type:Number,
        required:[true, "Age is required"]
    },
    trainingDescription:{
        type:String,
    }
})


const Trainee = mongoose.model("Trainee", traineeSchema)

module.exports = Trainee