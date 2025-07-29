const mongoose = require("mongoose")

const coachSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "username is required"]
    },
    age:{
        type:Number,
        required:[true, "age is required"]
    },
    Price:{
        type:Number,
        min:0,
        max:100,
        required:[true, "Price is required"]
    },

})